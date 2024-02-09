const mongoClient = require('../../../utils/mongoDB');
const [client, ObjectId] = mongoClient();

const userLike = async(req,res,next)=>{
   
    const connectDB = client.db('insertDB').collection('userLikes')
    const {email, action, comment} = req.query;

    
    
    const filter = {
        userEmail: email
    }

    let likeCount = 100;

    if (email && action === 'like') {

        likeCount = likeCount+1;
        
    }else if (email && action ==='dislike') {

        if (likeCount<=0) {

            return 
            
        }else{

            likeCount --

            res.status(200).json({message: "Dislike Done"})
        }

    }

    console.log(likeCount);
 
}

module.exports = userLike