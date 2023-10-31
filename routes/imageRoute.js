const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// const upload = multer();
// const upload  = require('multer');

router.post('/upload', imageController.save);
router.get('/images/:name', imageController.find);


module.exports = router;
