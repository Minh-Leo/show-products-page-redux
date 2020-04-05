const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products-controller.js');

// route for get '/products/'
router.get('/', productsController.productsGetAll);

module.exports = router;
