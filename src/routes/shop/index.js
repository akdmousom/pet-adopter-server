const express = require('express');
const shoppost = require('../../api/shop/controller/shoppost')
const orderInfopost = require('../../api/shop/controller/orderInfopost')
const orderInfoget = require('../../api/shop/controller/orderInfoget')
const shopget = require('../../api/shop/controller/shopget')
const singleitem = require('../../api/shop/controller/singleitem')
const router = express.Router();



router.post('/api/v1/shopitems', shoppost)
router.post('/api/v1/orders', orderInfopost)
router.get('/api/v1/orders', orderInfoget)
router.get('/api/v1/shopitems', shopget)
router.get('/api/v1/item/:id', singleitem)



module.exports = router