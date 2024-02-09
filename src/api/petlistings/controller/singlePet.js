const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const singlePet = async (req, res, next) => {
    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")

    const id = req.params.id;
    const pet = await petlistingsDB.findOne({ _id: new ObjectId(id) });
    res.send(pet)
}

module.exports = singlePet