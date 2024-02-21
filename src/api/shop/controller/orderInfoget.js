const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const orderInfoget = async (req, res, next) => {

    const orderDB = client.db('petAdopterDB').collection("orders")
    const result = await orderDB.find().toArray()
    res.send(result)
}

module.exports = orderInfoget