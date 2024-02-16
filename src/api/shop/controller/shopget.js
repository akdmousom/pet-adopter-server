const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const shopget = async (req, res, next) => {
    // const client = mongoClient();
    const shopDB = client.db('petAdopterDB').collection("shop")

    const result = await shopDB.find().toArray()
    res.send(result)
}

module.exports = shopget