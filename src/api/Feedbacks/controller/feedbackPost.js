

const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const feedbackPost = async (req, res, next) => {
    // const client = mongoClient();
    const Feedback = client.db('petAdopterDB').collection("feedbacks")
    const Data = req.body;
    const result = await Feedback.insertOne(Data);
    res.send(result)
}

module.exports = feedbackPost