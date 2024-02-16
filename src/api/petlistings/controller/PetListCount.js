const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const petlistCount = async (req, res, next) => {
    // const client = mongoClient();
    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")

    const result = await petlistingsDB.estimatedDocumentCount()
    res.json(result)
}

module.exports = petlistCount