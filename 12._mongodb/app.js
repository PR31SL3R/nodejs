import {Collection, MongoClient} from 'mongodb'

const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const dbName = "fish";

await client.connect();

const db = client.db(dbName);

const collection = db.collection("fishEnemies");

const species = await collection.find().toArray();

//console.log(db);

console.log(species);



//create a new species

await collection.insertOne({type: "trout"})

//pm2
//npm forever
//aws
//heroku
