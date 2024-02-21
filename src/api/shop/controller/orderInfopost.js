const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client] = get
const orderinfopost = async (req, res, next) => {

    const orderDB = client.db('petAdopterDB').collection("orders")


    const query = req.body;
    const result = await orderDB.insertOne(query);
    res.send(result)



}

module.exports = orderinfopost