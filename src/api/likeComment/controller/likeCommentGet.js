const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const adoptrequestget = async (req, res, next) => {

    const adoptRequestDB = client.db('petAdopterDB').collection("likeComment")

    const result = await adoptRequestDB.find().toArray()
    res.status(200).send(result);
    //     res.send(result, 'check all pet adopt rerquest')
}

module.exports = adoptrequestget