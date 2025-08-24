const express = require("express");
const router = express.Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/findById/:id", authMiddleware, categoriaController.findCategoriaByIdController)
router.get("/findAll/", authMiddleware, categoriaController.findAllCategoriaController)

router.post("/create", authMiddleware, categoriaController.createCategoriaController)

router.put("/update/:id", authMiddleware, categoriaController.updateCategoriaController)

router.delete("/delete/:id", authMiddleware, categoriaController.deleteCategoriaController)


module.exports = router;