const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const shoppost = async (req, res, next) => {

    const shopDB = client.db('petAdopterDB').collection("shop")


    const query = req.body;
    const result = await shopDB.insertOne(query);
    res.send(result)



}

module.exports = shoppost