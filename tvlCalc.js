// Create express app
var db = require("./database.js")
const axios = require('axios');



function getIcons() {
	var sql = 'select * from vaults where iconLoaded = 0 '
	var params = []
	db.all(sql, params, (err, row) => {
		if (err) {
			res.status(500).json("Error voting.")
		}

		if(row) {
			let processedContracts = [];
			row.forEach((data) => {

				//found contract icon on icon table?
				//update db for all rows, set processed row
				//next row

				/*
				let url = "https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/"+data.contract

				axios.get(url)
				  .then(response => {
					console.log(response.data.image.large);
				  })
				  .catch(error => {
					console.log(error);
				  });

				*/
				console.log(data);
				//save image
				//create row
				//update db

				return false;
				console.log("sleeping for 2 seconds");
				sleep(2000)
			});
		}
	});

}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}


getIcons();