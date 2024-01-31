const express = require('express');
const router = express.Router();
const adoptPage=require('../../api/adoptPageApplication/controller/adoptPagePost')
const getdata = require('../../api/adoptPageApplication/controller/adotPageGet')

router.post('/api/v1/adoptData',adoptPage)
router.get('/api/v1/adoptData',getdata)


module.exports = router