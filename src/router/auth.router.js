const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const {validacaoLogin} =  require("../middleware/validacao.middleware")

router.post("/login/",validacaoLogin ,authController.loginController);

module.exports = router;