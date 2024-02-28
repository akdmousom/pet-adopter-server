const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const UpdateItem = async (req, res) => {
    //database table
    const shopDB = client.db('petAdopterDB').collection("shop")
    // targeted id
    const id = req.params.id;
    //data
    const data = req.body;
    // filter targeted document
    const filter = { _id: new ObjectId(id) }
    // update query
    const query = {
        $set: {
            ...data
        }
    }
    const result = await shopDB.updateOne(filter, query)
    res.send(result)
}
module.exports = UpdateItem