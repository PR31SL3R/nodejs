import  sqlite3  from "sqlite3";
import {open} from "sqlite";

export let connection;


(async () =>  {
    console.log("ready to open");
    connection = await open({
        filename: "./games.db",
        driver: sqlite3.Database
    });
    console.log(db);
}) ();

