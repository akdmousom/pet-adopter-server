
require('dotenv').config();

const mongoClient = () => {

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DATABASE_CLIENT_USERNAME}:${process.env.DATABASE_CLIENT_PASSWORD}@cluster0.chkrm7d.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

return [client, ObjectId]

}

module.exports = mongoClient

