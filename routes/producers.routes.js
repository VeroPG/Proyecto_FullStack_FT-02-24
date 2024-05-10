
const express = require('express');
const router = express.Router();
const producers = require('../controllers/producers.controllers')


/*************SECCIÓN  PRODUCTOS**********/
// /products/3
// /products
router.get('/producers', producers.getProducer);

module.exports = router;
