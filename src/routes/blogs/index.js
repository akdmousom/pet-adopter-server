const express = require('express');
const blogs = require('../../api/blog/controller/blogPost');
const router = express.Router();


router.post('/api/v1/blogs', blogs)


module.exports = router;