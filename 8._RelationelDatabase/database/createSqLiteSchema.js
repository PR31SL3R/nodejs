import { connection } from "./connectDB.js";


(async () =>{

    const dbConnection = await connectSqlite();
    console.log(dbConnection);

    const gamesTableSchema = `
    CREATE TABLE GAMES (
        id INTEGER PRIMARY KEY,
           title TEXT NOT NULL )`;

            connection.exec(gamesTableSchema);
        

})();

