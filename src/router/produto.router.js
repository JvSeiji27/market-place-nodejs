const express = require("express");
const router = express.Router();
const productController = require("../controller/produto.controller")
const authMiddleware = require("../middleware/auth.middleware");
const { validacaoProduto, validaId, validaIdBody } = require("../middleware/validacao.middleware");
const {paginacao} = require("../middleware/paginacao.middleware")

router.get("/find/:id", authMiddleware, validaId, productController.findProductByIdController);

router.get("/findAll", authMiddleware, paginacao ,productController.findAllProductsController);

router.post("/create", authMiddleware, validacaoProduto, productController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaId,validaIdBody ,productController.addCategoriaProdutoController)

router.put("/update/:id", authMiddleware,validaId, validacaoProduto, productController.updateProductController);


router.delete("/delete/:id", authMiddleware, validaId, productController.deleteProductController)
router.delete("/removeCategoria/:id", authMiddleware, productController.removeCategoriaProdutoController)

module.exports = router;