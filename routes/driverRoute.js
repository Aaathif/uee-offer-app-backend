const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/driver', driverController.create);
router.get('/driver', driverController.findAll);
router.put('/driver/:id', driverController.update);
router.delete('/driver/:id', driverController.delete);

module.exports = router;
