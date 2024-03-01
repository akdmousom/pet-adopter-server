const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const AdopRequestPatch = async (req, res) => {
    const adoptRequestDB = client.db('petAdopterDB').collection("adoptrequest")
    const { id } = req.query;
    const { status } = req.body;
    const filter = { _id: new ObjectId(id) }
    const query = {
        $set: {
            status
        }
    }
    const result = await adoptRequestDB.updateOne(filter, query)
    res.send(result)
}
module.exports = AdopRequestPatch