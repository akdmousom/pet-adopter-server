const Payment = require('../../api/Payment/Payment');

const PaymentRoute = require('express').Router()
PaymentRoute.post("/createPaymentIntent",Payment);
module.exports = PaymentRoute