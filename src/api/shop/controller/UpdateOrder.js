const mailSend = require('../../../utils/SendMail');
const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client, ObjectId] = get
const UpdateOrder = async (req, res) => {
    const orderDB = client.db('petAdopterDB').collection("orders")
    const { id } = req.query;
    const data = req.body;
    const filter = { _id: new ObjectId(id) }
    const query = {
        $set: {
            status: data.status
        }
    }
    const result = await orderDB.updateOne(filter, query)
    const mailData = {
        sender: 'shaharulsiyam0273@gmail.com',
        receiver: `${data?.email}`,
        subject: 'your order has been confirmed',
        msg: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #555;">
            <p>your order has been deliverd</p>
            <h3 style="color: #333;"> Details:</h3>
            your order has been deliverd please collect it from nearest courier service
            <p>Best regards,<br>
               pet lover comunity<br>
               siyam
            </p>
        </body>`,
    }
    await mailSend(mailData)
    res.send(result)
}
module.exports = UpdateOrder