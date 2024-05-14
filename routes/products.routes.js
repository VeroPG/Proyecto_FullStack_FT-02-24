const express = require('express');
const router = express.Router();
const products= require('../controllers/products.controllers')


router.get('/products', products.getProducts);

module.exports = router;
