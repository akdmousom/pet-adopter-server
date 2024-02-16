const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const petlistings = async (req, res, next) => {
    const {pageNumber}=req.query;
    // const client = mongoClient();
    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")

    const result = await petlistingsDB.find().skip(Number(pageNumber * 10)).limit(10).toArray()
    res.send(result)
}

module.exports = petlistings