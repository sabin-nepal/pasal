//auth routing
const { Router } = require("express");
const router = Router();

const{
	createUser,
	login,
}	= require('../controllers/auth.js');

router.route('/register').post(createUser);
router.route('/login').post(login)
module.exports = router; 