const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
console.log(ObjectId);
const petlistingsdelete = async (req, res, next) => {

    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")

    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await petlistingsDB.deleteOne(query);
    res.send(result);

}

module.exports = petlistingsdelete