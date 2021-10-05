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

        db.run(`CREATE TABLE "vaults" (
                "id"	id,
                "name"	TEXT NOT NULL,
                "isLp"	INTEGER NOT NULL,
                "icon"	TEXT,
                "contract"	TEXT NOT NULL,
                "start"	INTEGER,
                "end"	INTEGER,
                "locktime"	NUMERIC,
                "pinned"	NUMERIC,
                "iconLoaded"	NUMERIC DEFAULT 0,
                "reward_amount"	NUMERIC,
                PRIMARY KEY("id")
            );`)

        db.run(`CREATE TABLE "users"
                (
                    "id"   TEXT    NOT NULL,
                    "address"  TEXT    NOT NULL,
                    "created_at"  INTEGER    NOT NULL,
                    PRIMARY KEY ("id")
                )`)

        db.run(`CREATE TABLE "users_votes"
                (
                    "id"   TEXT    NOT NULL,
                    "date" NUMERIC NOT NULL,
                    "uid"  TEXT    NOT NULL,
                    "vid"  TEXT    NOT NULL,
                    PRIMARY KEY ("id")
                )`)

    }
});


module.exports = db