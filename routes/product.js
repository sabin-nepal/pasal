//auth routing
const { Router } = require("express");
const router = Router();

const { protect } = require("../middelwares/protect.js");
const {
    addProduct,
    fetchProducts,
    getProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.js');


router.route('/').get(protect,fetchProducts);
router.route('/create').post(protect, addProduct);
router.route('/:id').get(protect,getProduct);
router.route('/:id').put(protect,updateProduct);
router.route('/:id').delete(protect,deleteProduct);
module.exports = router; 