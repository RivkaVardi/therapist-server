const express = require('express');
const therapistController = require('../controllers/therapistController');
const router = express.Router();

router.get('/', therapistController.getTherapists);

module.exports = router;
