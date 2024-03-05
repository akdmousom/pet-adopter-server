const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const Singledonationget = async (req, res) => {
    const donationDB = client.db('petAdopterDB').collection("donations")
    const email = req.params.email;
    const result = await donationDB.find({ email: email }).toArray();
    res.send(result)
}
module.exports = Singledonationget