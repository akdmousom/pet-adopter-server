const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient()
const getRegisterUserCount = async (req, res, next) => {
    const connectDB = client.db('petAdopterDB').collection('registerdUser')

    const { userRole } = req.body;



    if (userRole && userRole === "admin") {

        const userRegistration = await connectDB.find().toArray()
        res.send(userRegistration)

    } else{

        const userRegistration = await connectDB.estimatedDocumentCount()
        const result = await userRegistration

        res.status(200).json({totalRegisterdUser: result})

    }
     

     
}

module.exports = getRegisterUserCount