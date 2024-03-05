

const mailSend = require('../../../utils/SendMail');
const mongoClient = require('../../../utils/mongoDB');

const get = mongoClient()
const [client, ObjectId] = get
const donationpost = async (req, res, next) => {
    // const client = mongoClient();
    const donationDB = client.db('petAdopterDB').collection("donations")
    const query = req.body;
    const result = await donationDB.insertOne(query);
    const mailData = {
        sender: 'shaharulsiyam0273@gmail.com',
        receiver: `${query?.email}`,
        subject: 'thanks for your donation',
        msg: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; color: #555;">
            <p>Dear ${query.name},</p>
            <p>we just reccive you donation</p>
            <h3 style="color: #333;"> Details:</h3>
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 10px;"><strong> amount:</strong> ${query.amount}</li>
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

module.exports = donationpost