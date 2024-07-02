const express = require('express');
const {registerUser,authUser}=require("../controllers/usercontrollers")
const router = express.Router();

router.post('/login', authUser);
router.route('/').post(registerUser);

module.exports = router;