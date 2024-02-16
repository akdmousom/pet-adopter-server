const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const feedbackGet = async (req, res, next) => {
    const Feedback = client.db('petAdopterDB').collection("feedbacks")
    const result = await Feedback.find().toArray();
    res.send(result)
}

module.exports = feedbackGet