

const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const donationpost = async (req, res, next) => {
    // const client = mongoClient();
    const donationDB = client.db('petAdopterDB').collection("donations")


    const query = req.body;
    const result = await donationDB.insertOne(query);
    res.send(result)



}

module.exports = donationpost