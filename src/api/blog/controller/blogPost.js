const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient();

const database = client.db('petAdopterDB').collection('blogPost')

const blogPost = async (req,res,next) => {

    const { user } = req.query;

    const reqBody = req.body;
    const { title, body } = req.body;
  
    console.log(reqBody);
  
    const doc = {
      user: user,
      title: title,
      body: body,
      date: new Date(),
      like: 0
    }
  
    if (user && title && body) {
  
      const cursor = await database.insertOne(doc)
      const result = await cursor
      res.send(result)
  
    } else if (!user || !title || !body) {
  
      res.status(400).json({ message: "Bad Request" })
  
    }


}

module.exports = blogPost