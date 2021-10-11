// Create express app
var express = require("express")
var db = require("./database.js")
var ethers = require('ethers')
var app = express()
var md5 = require("md5")
var crypto = require("crypto");
var moment = require("moment");
var bodyParser = require("body-parser");
var userAddress = null;
var cors = require('cors');
var sanitizer = require('sanitizer');

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cors());
app.use(bodyParser.json());

var HTTP_PORT = 8033

app.listen(HTTP_PORT, () => {
	console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.post("/api/bind", async (req, res, next) => {

	if (!validateAddress(res, req.body.address)) {
		return false;
	}

	userAddress = req.body.address.toLowerCase();

	createUser(function(err, row) {
		if (err) {
			console.error(err.message);
		}
		if (row) {
			res.status(500).json({
				"message": "Error",
				"data": "Already binded."
			});
		} else {
			addUser(
				res,
				crypto.randomBytes(13).toString('hex'),
				userAddress
			)
		}
	});
});


var createUser = function(callback) {
	var sql = "select * from users where address = ?"
	var params = [userAddress]
	var data = null;
	db.get(sql, params, (err, row) => {
		callback(err, row);
	});
};

function addVault(res, data) {
	var sql = `INSERT INTO vaults (
                       id,
                       name,
                       is_lp,
                       stake_contract,
                       reward_contract,
                       start,
                       [end],
                       reward_amount
                   )
                   VALUES (?,?,?,?,?,?,?,?)`


	let start = moment().unix();
	let end = moment().add(data.days, 'days').unix();

	var params = [
		data.id,
		data.name,
		data.is_lp,
		data.stake_contract,
		data.reward_contract,
		start,
		end,
		data.reward,
	]

	db.run(sql, params, function(err, result) {
		if (err) {
			console.log(err.message)
			//res.status(500).json("error creating vault")
			return;
		}

		res.json({
			"message": "success",
			"data": "created."
		});
	});
}

function addUser(res, id, address) {
	var sql = 'INSERT INTO users (id, address, created_at) VALUES (?,?,?)'
	var params = [
		sanitizer.sanitize(id),
		sanitizer.sanitize(address),
		moment().unix()
	]
	db.run(sql, params, function(err, result) {
		if (err) {
			res.status(500).json({
				"error binding user": err.message
			})
			return;
		}

		res.json({
			"message": "success",
			"data": "binded."
		});
	});
}

function validateAddress(res, address) {
	try {
		ethers.utils.getAddress(address);
		return true;
	} catch (error) {
		res.json({
			"message": "error",
			"data": "Invalid address."
		})
		return false;
	}
}

function stripHTML(html) {
  var clean = sanitizer.sanitize(html, function(str) {
    return str;
  });

  clean = clean.replace(/<(?:.|\n)*?>/gm, "");
  clean = clean.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/ig, "\n");
  return clean.trim();
}

app.post("/api/vault", (req, res, next) => {

	data = {
		id: sanitizer.sanitize(req.body.id),
		name: sanitizer.sanitize(req.body.name),
		is_lp: sanitizer.sanitize(req.body.is_lp),
		stake_contract: sanitizer.sanitize(req.body.stake_contract),
		reward_contract: sanitizer.sanitize(req.body.reward_contract),
		days: sanitizer.sanitize(req.body.days),
		reward: sanitizer.sanitize(req.body.reward_amount),
	}

	let errors = validateVaultPost(data);

	if (typeof errors !== 'undefined' && errors.length > 0) {
		res.status(500).json({
			"message": "error",
			"data": errors.join(', ')
		})
		return false
	}

	if (!ethers.utils.isAddress(req.body.stake_contract)) {
		res.status(500).json({
			"message": "error",
			"data": "Invalid Stake Contract"
		})
	}

	if (!ethers.utils.isAddress(req.body.reward_contract)) {
		res.status(500).json({
			"message": "error",
			"data": "Invalid Reward Contract"
		})
	}

	addVault(res, data);
});

function validateVaultPost(postData) {

	console.log(postData.days);

	let errors = [];

	if (postData.name == null) {
		errors.push(["Invalid name"]);
	}

	if (postData.is_lp !== "true" && postData.is_lp !== "false") {
		errors.push(["Vault id must be informed"]);
	}

	if (postData.stake_contract == null) {
		errors.push(["Contract must be informed"]);
	}

	if (postData.reward_contract == null) {
		errors.push(["Contract must be informed"]);
	}

	if (postData.days == null || !validateNumber(postData.days)) {
		errors.push(["Days must be informed"]);
	}else{
		let number = parseInt(postData.days);
		if(!(number >= 1 && number <= 365)) {
			errors.push(["Dates not allows"]);
		}
	}

	if (!validateNumber(data.reward)) {
		errors.push(["Invalid rewards"]);
	}

	return errors;
}

function validateNumber(number) {
	var n = Math.floor(Number(number));
	return n !== Infinity && String(n) === number && n >= 0;
}

app.get("/api/vaults", (req, res, next) => {
	var sql = `SELECT v.*,
       COUNT(uv.id) AS votes 
  FROM vaults as v
       LEFT JOIN users_votes as uv
       ON v.id = uv.vid
 GROUP BY v.id 
 ORDER BY votes DESC;`

	var params = []
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({
				"error": err.message
			});
			return;
		}
		res.json({
			"message": "success",
			"data": rows
		})
	});
});

app.post("/api/vault/pin/:id", (req, res, next) => {

	const status = parseInt(req.body.status);

	if (status !== 1 && status !== 0) {
		res.status(500).json({
			message: "Error",
			data: "Invalid pin status.",
		})
		return false;
	}

	const params = [
		status,
		req.params.id,
	]

	db.run('UPDATE vaults set pinned = ? WHERE id = ?', params, (err, result) => {
		if (err) {
			res.status(400).json({
				"error": err.message
			})
			return;
		}
		res.json({
			message: "success",
		})
	});

});

app.post("/api/vault/vote/:id", (req, res, next) => {

	if (!validateAddress(res, req.body.address)) {
		return false;
	}

	const userAddress = req.body.address.toLowerCase();

	const voteOption = 1;

	var sql = 'select * from users where address = ? '
	var params = [userAddress]
	db.get(sql, params, (err, row) => {
		if (err) {
			res.status(500).json("Error voting.")
		} else {
			if (row) {
				validateVoteVault(res, req.params.id, voteOption, row.id);
			} else {
				res.status(500).json("Error voting.")
			}
		}
	});
});

function validateVoteVault(res, vaultId, voteOption, userId) {
	var sql = "select * from vaults where id = ?"
	var params = [vaultId]
	db.get(sql, params, (err, row) => {
		if (!row) {
			res.status(500).json("Vault not found.");
		} else {
			validateUserVote(res, vaultId, voteOption, userId)
		}
	});
}

function validateUserVote(res, vaultId, voteOption, userId) {

	var sql = "select * from users_votes where uid = ? " +
		"and DATETIME(date, 'unixepoch') >= datetime('now','-24 hours')";

	var params = [userId]
	db.get(sql, params, (err, row) => {
		if (row) {
			res.status(500).json("Already voted, please wait 24 hours to vote again.");
		} else {
			addVote(res, vaultId, voteOption, userId)
		}
	});
}

function addVote(res, vaultId, voteOption, userId) {
	var voteDate = moment().unix()

	var sql = `INSERT INTO users_votes (
                       date,
                       uid,
                       vid
                   )
                   VALUES (?,?,?)`

	var params = [
		voteDate,
		userId,
		vaultId,
	]

	db.run(sql, params, function(err, result) {
		if (err) {
			res.status(500).json("Error user voting.")
			return;
		}

		res.json({
			"message": "success",
			"data": "voted."
		});
	});
}

app.post("/api/vault/close", (req, res, next) => {
	//close vault
	res.json({
		"message": "success",
		"data": "vaults"
	})
});

app.get("/", (req, res, next) => {
	res.json({
		"message": "Ok"
	})
});
app.use(function(req, res) {
	res.status(404);
});