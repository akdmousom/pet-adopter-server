

const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const petlistingspost = async (req, res, next) => {
    // const client = mongoClient();
    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")


    const query = req.body;
    const result = await petlistingsDB.insertOne(query);
    res.send(result)



}

module.exports = petlistingspost