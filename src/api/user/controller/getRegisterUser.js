const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient()
const getRegisterUser = async(req,res,next)=>{
    const connectDB = client.db('petAdopterDB').collection('registerdUser')
    const {email} = req.query;
    const filter = {
        userEmail: email
    }
    const userRegistration = await connectDB.findOne(filter);
    const cursor = await userRegistration
    console.log(cursor);
    if (cursor == null) return res.json({message: "Data Not Exsist"});
    res.send(cursor)
}

module.exports = getRegisterUser