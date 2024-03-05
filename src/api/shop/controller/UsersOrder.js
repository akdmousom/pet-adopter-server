const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const UsersOrder = async(req,res)=>{
    const orderDB = client.db('petAdopterDB').collection("orders")
    const { email } = req.query;
    const filter = {
        email : email
    }
    const result = await orderDB.find(filter).toArray()
    res.send(result)
}
module.exports = UsersOrder