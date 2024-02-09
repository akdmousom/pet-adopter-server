const express = require('express');
const router = express.Router();
const petCommunityPost=require('../../api/petLoverCommunity/controller/petCommunityPost')
const petCommunityGet = require('../../api/petLoverCommunity/controller/petCommunityGet')

router.post('/api/v1/petCommunity',petCommunityPost)
router.get('/api/v1/petCommunity',petCommunityGet)


module.exports = router