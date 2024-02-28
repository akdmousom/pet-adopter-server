const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const DeleteItem = async (req, res) => {
    //database table
    const shopDB = client.db('petAdopterDB').collection("shop")
    // targeted id
    const id = req.params.id;
    const result = await shopDB.deleteOne({ _id: new ObjectId(id) })
    res.send(result)
}
module.exports = DeleteItem