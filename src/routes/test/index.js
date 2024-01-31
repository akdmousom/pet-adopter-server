const express = require('express');
const router = express.Router();

const home = require('../../api/test/controller/home')
const register = require('../../api/test/controller/register')

router.get('/',home)

router.post('/api/v1/register', register)


module.exports = router