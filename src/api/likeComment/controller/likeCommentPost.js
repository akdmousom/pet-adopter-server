const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const likeComment = async (req, res, next) => {

    const likeComment = client.db('petAdopterDB').collection("likeComment")


    const query = req.body;
    const result = await likeComment.insertOne(query);
    res.send(result)



}

module.exports = likeComment