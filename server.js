// import { MongoClient } from "mongodb";
const { MongoClient } = require('mongodb')
// Replace the uri string with your MongoDB deployment's connection string.
var config   = require('./config');
var mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port + '/' + config.mongodb.database;
var date_time = new Date();
// Create a new client and connect to MongoDB
const client = new MongoClient(mongoUri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db(config.mongodb.database);
    const haiku = database.collection("message");

    const result = await haiku.find({});

    // Print the ID of the inserted document
    console.log(result.toArray());
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);

