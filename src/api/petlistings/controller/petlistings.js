const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const petlistings = async (req, res, next) => {
    // const client = mongoClient();
    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")

    const result = await petlistingsDB.find().toArray()
    res.send(result)
}

module.exports = petlistings