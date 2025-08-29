const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {validacaoCarrinho, validaId} = require("../middleware/validacao.middleware")
router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController)
router.get("/findAll/", authMiddleware, carrinhoController.findAllCarrinhosController)

router.post("/create/", authMiddleware, validacaoCarrinho,carrinhoController.createCarrinhoController)

router.put("/update/:id", authMiddleware, validaId, validacaoCarrinho, carrinhoController.updateCarrinhoController)

router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoController)

module.exports = router