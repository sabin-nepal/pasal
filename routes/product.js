//auth routing
const { Router } = require("express");
const router = Router();

const { protect } = require("../middelwares/protect.js");
const {
    addProduct
} = require('../controllers/product.js');

router.route('/create').post(protect, addProduct);
module.exports = router; 