const express = require('express');
const router = express.Router();

const userRegistration = require('../../api/user/controller/userResgisterPost')
const getRegisteredUser = require('../../api/user/controller/getRegisterUser')
const getRegisterdUserCount = require('../../api/user/controller/getRegisterUserCount')

router.post('/api/v1/userregistration',userRegistration)
router.get('/api/v1/getregisteruser',getRegisteredUser)
router.get('/api/v1/getUserDataCount',getRegisterdUserCount )


module.exports = router