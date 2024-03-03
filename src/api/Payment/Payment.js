require('dotenv').config()
const stripe = require("stripe")(process.env.SRTIPE_KEY)
const Payment = async (req, res) => {
    const { price } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(price * 100),
        currency: "usd",
        payment_method_types: [
            "card"
        ],
    });
    
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}
module.exports = Payment