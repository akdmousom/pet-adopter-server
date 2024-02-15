const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient();
const database = client.db('petAdopterDB');
const userLiked = database.collection('userLiked');
const blogPosts = database.collection('blogPost')

const userLike = async (req, res, next) => {

  const { postId } = req.query;
  const { user } = req.query;
  const { like } = req.query;
  const { comment } = req.body;

  if (postId && user) {

    const filter = { postID: postId };
    const cursor = await userLiked.findOne(filter);

    if (cursor) {
      res.status(400).json('You have already liked this post')
      return
    }


  }

  if (postId && user && like) {

    const filter = { _id: new ObjectId(`${postId}`) }
    const cursor = await blogPosts.findOne(filter)

    const { like, title } = cursor;
    const likeCount = like + 1;

    const options = { upsert: true };

    const updateDoc = {
      $set: {
        like: likeCount,
      }
    }

    const likeUpdate = await blogPosts.updateOne(filter, updateDoc, options);

    if (likeUpdate && user) {

      const likePost = {
        user: user,
        postID: postId,
        postTitle: title,
        comment: comment || null,
        date: new Date()
      }
      const liked = await userLiked.insertOne(likePost);

      res.status(200).json({ message: "Success" })

    }
  }

}

module.exports = userLike