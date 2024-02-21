require('dotenv').config();
const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient()

const petCommunityGetData = async(req,res,next)=>{
    const petCommunity = client.db("petAdopterDB").collection("petCommunity");
   
    const cursor = await petCommunity.find().toArray();
    const result = await cursor;
    res.send(result)

}
module.exports = petCommunityGetData