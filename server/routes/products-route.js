const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products-controller.js');

// route for get '/products/all'
router.get('/all', productsController.productsGetAll);

module.exports = router;
