const express = require('express');
const { registerUser, loginUser } = require('../controllers/controllers.js');
const { check } = require('express-validator');
const { userValidationRules } = require('../validators/inputValidator.js');

const router = express.Router();

router.post('/register', userValidationRules(), registerUser);
router.post('/login', loginUser);

module.exports = router;
