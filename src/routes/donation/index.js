const express = require('express');
const router = express.Router();
const donationpost = require('../../api/donation/controller/donationpost');
const donationget = require('../../api/donation/controller/donationget');


router.post('/api/v1/donations', donationpost)
router.get('/api/v1/donations', donationget)
module.exports = router