const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const petlistingsput = async (req, res, next) => {
    // const client = mongoClient();
    const petlistingsDB = client.db('petAdopterDB').collection("petlistings")

    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updatepets = req.body;
    const pets = {
        $set: {
            petName: updatepets.petName,
            petImage: updatepets.petImage,
            petCategory: updatepets.petCategory,
            petAge: updatepets.petAge,
            petLocation: updatepets.petLocation,
            description: updatepets.description,
        }
    }
    const result = await petlistingsDB.updateOne(filter, pets, options);

    res.send(result)

}

module.exports = petlistingsput