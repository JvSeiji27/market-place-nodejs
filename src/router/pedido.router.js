const express = require("express");
const router  = express.Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {validacaoPedido} = require("../middleware/validacao.middleware")


router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, pedidoController.findAllPedidosController)

router.post("/create/", authMiddleware, validacaoPedido, pedidoController.createPedidoController);

//no update nao precisa
router.patch("/patch/:id", authMiddleware, pedidoController.updateStatusPedidoController)

router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController);


module.exports = router