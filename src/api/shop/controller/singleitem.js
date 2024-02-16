const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const singleitem = async (req, res, next) => {
    const shopDB = client.db('petAdopterDB').collection("shop")

    const id = req.params.id;
    const pet = await shopDB.findOne({ _id: new ObjectId(id) });
    res.send(pet)
}

module.exports = singleitem