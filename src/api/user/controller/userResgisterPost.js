const mongoClient = require('../../../utils/mongoDB');

const userRegistration = async(req,res,next)=>{

    // Get the client from mongodb shared utils.
    const client = mongoClient();

    // Create a database and a collection
    const db = client.db('insertDB')
    const user = db.collection('registerdUser')
    
    // Get user input data through request body
    const userData = req.body;

    //Insert user data in created collection
    const cursor = await user.insertOne(userData);

    // Wait for the cursor response
    const result = await cursor;

    // If data insert done send a response 
    res.send(result)

}

module.exports = userRegistration