const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const MedicinePost = async (req, res, next) => {
    // const client = mongoClient();
    const medicine = client.db('petAdopterDB').collection("medicine")
    const Data = req.body;
    const result = await medicine.insertOne(Data);
    res.send(result)
}

module.exports = MedicinePost