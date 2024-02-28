require('dotenv').config();
const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient()

const petCommunityGetData = async(req,res,next)=>{
    const petLike = client.db("petAdopterDB").collection("petLike");
   
    const cursor = await petLike.find().toArray();
    const result = await cursor;
    res.send(result)

}
module.exports = petCommunityGetData