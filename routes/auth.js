//auth routing
const { Router } = require("express");
const router = Router();

const{
	createUser,
}	= require('../controllers/auth.js');

router.route('/register').post(createUser);

module.exports = router; 