const express = require('express');
const router = express.Router();
const donationpost = require('../../api/donation/controller/donationpost')


router.post('/api/v1/donations', donationpost)
module.exports = router