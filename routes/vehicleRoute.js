const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/vehicle', vehicleController.create);
router.get('/vehicle', vehicleController.findAll);
router.put('/vehicle/:id', vehicleController.update);
router.delete('/vehicle/:id', vehicleController.delete);

module.exports = router;
