const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const donationget = async(req,res)=>{
    const donationDB = client.db('petAdopterDB').collection("donations")
    const result = await donationDB.find().toArray();
    res.send(result)
}
module.exports = donationget