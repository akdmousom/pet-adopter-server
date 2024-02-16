const express = require('express');
const router = express.Router();
const adoptrequestpost = require('../../api/adoptRequest/controller/adoptrequestpost')
const adoptrequestget = require('../../api/adoptRequest/controller/adoptrequrestget')


router.post('/api/v1/adoptrequest', adoptrequestpost)
router.get('/api/v1/adoptrequest', adoptrequestget)
module.exports = router