const express = require('express');
const router = express.Router();
const likeCommentPost = require('../../api/likeComment/controller/likeCommentPost')
const likeCommentGet = require('../../api/likeComment/controller/likeCommentGet')


router.post('/api/v1/likeComment', likeCommentPost)
router.get('/api/v1/likeCommentGet', likeCommentGet)
module.exports = router