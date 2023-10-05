// import { MongoClient } from "mongodb";
const { MongoClient } = require('mongodb')
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017"
var date_time = new Date();
// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("test");
    const haiku = database.collection("message");
    
    // Create a document to insert
    const doc = {
//      title: "Record of a Shriveled Datum",
      fecha: date_time,
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    // Insert the defined document into the "haiku" collection
    const result = await haiku.insertOne(doc);

    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);

