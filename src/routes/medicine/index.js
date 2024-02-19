const express = require('express');
const MedicinePost = require('../../api/medicine/controller/MedicinePost');
const MedicineGet = require('../../api/medicine/controller/MedicineGet');

const router = express.Router();
router.post('/api/v1/medicine', MedicinePost)
router.get('/api/v1/medicine', MedicineGet)
module.exports = router