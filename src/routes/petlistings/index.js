const express = require('express');
const petlistings = require('../../api/petlistings/controller/petlistings')
const petlistingspost = require('../../api/petlistings/controller/petlistingspost')
const singlePet = require('../../api/petlistings/controller/singlePet')
const petlistingsput = require('../../api/petlistings/controller/petlistingsput')
const petlistingsdelete = require('../../api/petlistings/controller/petlistingsdelete');
const petlistCount = require('../../api/petlistings/controller/PetListCount');
const router = express.Router();



router.post('/api/v1/petlistings/', petlistingspost)
router.get('/api/v1/petlistings', petlistings)
router.get('/api/v1/petlistcount', petlistCount)
router.get('/api/v1/pet/:id', singlePet)
router.put('/api/v1/petlistings/:id', petlistingsput)
router.delete('/api/v1/petlistings/:id', petlistingsdelete)


module.exports = router