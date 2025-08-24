const express = require("express");
const router = express.Router();
const productController = require("../controller/produto.controller")
const authMiddleware = require("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware, productController.findProductByIdController);

router.get("/findAll", authMiddleware, productController.findAllProductsController);

router.post("/create", authMiddleware, productController.createProductController);

router.put("/update/:id", authMiddleware, productController.updateProductController);


router.delete("/delete/:id", authMiddleware, productController.deleteProductController)

module.exports = router;