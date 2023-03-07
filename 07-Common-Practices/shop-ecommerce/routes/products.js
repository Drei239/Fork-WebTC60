var express = require('express');
var router = express.Router();
const { getProducts } = require('../controller/productController');
// API 1 - get product
// @desc: Get all products
// @route: GET /api/products
// @access: Public
router.get('/', getProducts)


// API 2
module.exports = router;