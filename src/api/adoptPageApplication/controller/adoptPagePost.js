const mongoDB = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoDB(); 
const adoptPage = async(req,res,next)=>{
   
    const adoptData = client.db("insertDB").collection("adoptData");
    const newData=req.body
    const result = await adoptData.insertOne(newData);
    res.send(result)

}
module.exports = adoptPage