require('dotenv').config();
const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient()

const petCommunity = async(req,res,next)=>{
   
    const petLike = client.db("petAdopterDB").collection("petLike");
    const newData=req.body
    const result = await petLike.insertOne(newData);
    res.send(result)

}
module.exports = petCommunity