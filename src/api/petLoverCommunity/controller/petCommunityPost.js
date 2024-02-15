require('dotenv').config();
const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient()

const petCommunity = async(req,res,next)=>{
   
    const petCommunity = client.db("insertDB").collection("petCommunity");
    const newData=req.body
    const result = await petCommunity.insertOne(newData);
    res.send(result)

}
module.exports = petCommunity