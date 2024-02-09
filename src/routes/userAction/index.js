const express = require('express');
const router = express.Router();

const userAction = require('../../api/userAction/controller/userLike')

router.post('/api/v1/userAction',userAction)



module.exports = router