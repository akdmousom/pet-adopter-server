const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const adoptrequestpost = async (req, res, next) => {

    const adoptRequestDB = client.db('petAdopterDB').collection("adoptrequest")


    const query = req.body;
    const result = await adoptRequestDB.insertOne(query);
    res.send(result)



}

module.exports = adoptrequestpost