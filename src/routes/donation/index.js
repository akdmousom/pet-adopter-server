const express = require('express');
const router = express.Router();
const donationpost = require('../../api/donation/controller/donationpost');
const donationget = require('../../api/donation/controller/donationget');
const Singledonationget = require('../../api/donation/controller/getSingleDonation');


router.post('/api/v1/donations', donationpost)
router.get('/api/v1/donations', donationget)
router.get('/api/v1/donations/:email', Singledonationget)
module.exports = router