const mailSend = require('../../../utils/SendMail');
const mongoClient = require('../../../utils/mongoDB');
const get = mongoClient()
const [client] = get
const orderinfopost = async (req, res, next) => {
    const orderDB = client.db('petAdopterDB').collection("orders")
    const query = req.body;
    const result = await orderDB.insertOne(query);
    const mailData = {
        sender: 'shaharulsiyam0273@gmail.com',
        receiver: `${query?.email}`,
        subject: 'your order has been confirmed',
        msg: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #555;">
            <p>Dear ${query.fullName},</p>
            <p>your order has been placed</p>
            <h3 style="color: #333;"> Details:</h3>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong>Employee price:</strong> ${query.price}</li>
                <li style="margin-bottom: 10px;"><strong>item:</strong> ${query.itemName}</li>
                <li style="margin-bottom: 10px;"><strong>transiotion ID :</strong> ${query.transID}</li>
            </ul>
            <p>Best regards,<br>
               pet lover comunity<br>
               siyam
            </p>
        </body>`,
    }
    await mailSend(mailData)
    res.send(result)
}

module.exports = orderinfopost