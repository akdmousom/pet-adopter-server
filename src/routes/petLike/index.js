const express = require('express');
const router = express.Router();
const petLikePost=require('../../api/petLike/controller/petLIkePost')
const petLikeGet = require('../../api/petLike/controller/petLikeGet')

router.post('/api/v1/petLike',petLikePost)
router.get('/api/v1/petLikeGet',petLikeGet)


module.exports = router