const express = require("express");
const router  = express.Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");


router.get("/findById/:id", authMiddleware, pedidoController.findPedidoByIdController)
router.get("/findAll/", authMiddleware, pedidoController.findAllPedidosController)

router.post("/create/", authMiddleware, pedidoController.createPedidoController);

router.patch("/patch/:id", authMiddleware, pedidoController.updateStatusPedidoController)

router.delete("/delete/:id", authMiddleware, pedidoController.deletePedidoController);


module.exports = router