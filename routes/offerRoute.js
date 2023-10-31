const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');

router.post('/offer', offerController.create);
router.get('/offers', offerController.findAll);
router.put('/offer/:id', offerController.update);
router.delete('/offer/:id', offerController.delete);

module.exports = router
