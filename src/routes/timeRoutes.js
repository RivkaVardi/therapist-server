const express = require('express');
const timeController = require('../controllers/timeController');
const router = express.Router();

router.get('/:therapist', timeController.getTimesByTherapist);
router.delete('/:id', timeController.deleteTime);

module.exports = router;
