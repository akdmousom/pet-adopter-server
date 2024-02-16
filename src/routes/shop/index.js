const express = require('express');
const shoppost = require('../../api/shop/controller/shoppost')
const shopget = require('../../api/shop/controller/shopget')
const singleitem = require('../../api/shop/controller/singleitem')
const router = express.Router();



router.post('/api/v1/shopitems', shoppost)
router.get('/api/v1/shopitems', shopget)
router.get('/api/v1/item/:id', singleitem)



module.exports = router