const express = require("express");
const router  = express.Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {validacaoPedido, validaId, validaProdutos} = require("../middleware/validacao.middleware")
const {paginacao} = require("../middleware/paginacao.middleware")



router.get("/findById/:id", authMiddleware,validaId, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, pedidoController.findAllPedidosController)

router.post("/create/", authMiddleware,validaProdutos ,validacaoPedido, pedidoController.createPedidoController);

//no update nao precisa
router.patch("/patch/:id", authMiddleware,validaId, pedidoController.updateStatusPedidoController)

router.delete("/delete/:id", authMiddleware, validaId, pedidoController.deletePedidoController);


module.exports = router