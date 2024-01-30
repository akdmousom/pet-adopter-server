const express = require('express');
const router = express.Router();

const home = require('../../api/test/controller/home')

router.get('/',home)


module.exports = router