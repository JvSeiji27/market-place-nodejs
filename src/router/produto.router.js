const express = require("express");
const router = express.Router();
const productController = require("../controller/produto.controller")
const authMiddleware = require("../middleware/auth.middleware");
const { validacaoProduto } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, productController.findProductByIdController);

router.get("/findAll", authMiddleware, productController.findAllProductsController);

router.post("/create", authMiddleware, validacaoProduto, productController.createProductController);
router.post("/addCategoria/:id", authMiddleware, productController.addCategoriaProdutoController)

router.put("/update/:id", authMiddleware,validacaoProduto, productController.updateProductController);


router.delete("/delete/:id", authMiddleware, productController.deleteProductController)
router.delete("/removeCategoria/:id", authMiddleware, productController.removeCategoriaProdutoController)

module.exports = router;