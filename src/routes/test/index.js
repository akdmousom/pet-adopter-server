const express = require('express');
const home = require('../../api/test/home');
const insert = require('../../api/test/insert');
const router = express.Router();

router.get('/',home)

router.post('/insert', insert )

module.exports = router