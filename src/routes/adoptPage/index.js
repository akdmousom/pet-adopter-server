const express = require('express');
const router = express.Router();
const adoptPage=require('../../api/adoptPageApplication/controller/adoptPagePost')
const getdata = require('../../api/adoptPageApplication/controller/adotPageGet')

router.post('/adoptData',adoptPage)
router.get('/adoptData',getdata)


module.exports = router