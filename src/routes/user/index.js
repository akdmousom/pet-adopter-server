const express = require('express');
const router = express.Router();

const userRegistration = require('../../api/user/controller/userResgisterPost')
const getRegisteredUser = require('../../api/user/controller/getRegisterUser')

router.post('/api/v1/userregistration',userRegistration)
router.get('/api/v1/getregisteruser',getRegisteredUser)


module.exports = router