const express = require('express');
const feedbackPost = require('../../api/Feedbacks/controller/feedbackPost');
const feedbackGet = require('../../api/Feedbacks/controller/fedbackGet');
const router = express.Router();

router.post('/api/v1/Feedbacks', feedbackPost)
router.get('/api/v1/Feedbacks', feedbackGet)
module.exports = router