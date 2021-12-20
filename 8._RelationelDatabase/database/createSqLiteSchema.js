import { connection } from "./connectDB.js";


(async () =>{

    const dbConnection = await connectSqlite();
    console.log(dbConnection);

    const messagesTableSchema = `
    CREATE TABLE Messages (
        id INTEGER PRIMARY KEY,
           name TEXT NOT NULL
           email TEXT NOT NULL
           subject TEXT NOT NULL
           message TEXT NOT NULL )`;

            connection.exec(messagesTableSchema);
        

})();

