const mongoClient = require('../../../utils/mongoDB');

const getRegisterUser = async(req,res,next)=>{
    const client = mongoClient();
    const connectDB = client.db('insertDB').collection('registerdUser')
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