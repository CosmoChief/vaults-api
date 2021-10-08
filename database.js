var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      //throw err
    }else{
        console.log('Connected to the SQLite database.')
        /*db.run(`CREATE TABLE "vaults" (
                "id"	INTEGER PRIMARY KEY,
                "name"	TEXT NOT NULL,
                "isLp"	INTEGER NOT NULL,
                "tokenImgId" INTEGER DEFAULT 0,
                "contract"	TEXT NOT NULL,
                "start"	INTEGER,
                "end"	INTEGER,
                "locktime"	NUMERIC,
                "pinned"	NUMERIC DEFAULT 0,
                "reward_amount"	NUMERIC
            );`)

        db.run(`CREATE TABLE "users"
                (
                    "id"   TEXT    NOT NULL,
                    "address"  TEXT    NOT NULL,
                    "created_at"  INTEGER    NOT NULL
                )`)

        db.run(`CREATE TABLE "users_votes"
                (
                    "id"   INTEGER PRIMARY KEY,
                    "date" NUMERIC NOT NULL,
                    "uid"  TEXT    NOT NULL,
                    "vid"  TEXT    NOT NULL
                )`)

        db.run(`CREATE TABLE "token_img"
                (
                    "id"   INTEGER PRIMARY KEY,
                    "contract"  TEXT    NOT NULL,
                    "img_main"  TEXT    NOT NULL,
                    "img_second"  TEXT
                )`)

        db.run(`CREATE TABLE "vaults_tvl"
                (
                    "id"   INTEGER PRIMARY KEY,
                    "vid"  TEXT    NOT NULL,
                    "date" NUMERIC NOT NULL,
                    "tvl"  TEXT    NOT NULL
                )`)*/

    }
});


module.exports = db