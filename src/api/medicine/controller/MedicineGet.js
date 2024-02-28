const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const MedicineGet = async (req, res, next) => {
    const medicine = client.db('petAdopterDB').collection("medicine")
    const result = await medicine.find().toArray();
    res.send(result)
}

module.exports = MedicineGet