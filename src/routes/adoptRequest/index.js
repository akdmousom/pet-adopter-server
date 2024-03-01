const express = require('express');
const router = express.Router();
const adoptrequestpost = require('../../api/adoptRequest/controller/adoptrequestpost')
const adoptrequestget = require('../../api/adoptRequest/controller/adoptrequrestget');
const AdopRequestPatch = require('../../api/adoptRequest/controller/AdopRequestPatch');


router.post('/api/v1/adoptrequest', adoptrequestpost)
router.get('/api/v1/adoptrequest', adoptrequestget)
router.put('/api/v1/adoptrequest', AdopRequestPatch)
module.exports = router