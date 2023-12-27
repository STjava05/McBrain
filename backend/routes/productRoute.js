
const express = require('express');
const { setProduct, getProduct, updateProduct,deleteProduct,getSingleProduct } = require('../controllers/productController');
const router = express.Router();




router.get('/', getProduct);
router.get('/:id', getSingleProduct);
router.post('/', setProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);






module.exports = router;