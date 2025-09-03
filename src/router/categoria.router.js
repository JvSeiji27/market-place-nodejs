const express = require("express");
const router = express.Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {validacaoCategoria, validaId} = require("../middleware/validacao.middleware")
const {paginacao} = require("../middleware/paginacao.middleware")


router.get("/findById/:id", authMiddleware, validaId, categoriaController.findCategoriaByIdController)
router.get("/findAll/", authMiddleware, categoriaController.findAllCategoriaController)

router.post("/create", authMiddleware, validacaoCategoria, categoriaController.createCategoriaController)

router.put("/update/:id", authMiddleware,validaId, validacaoCategoria, categoriaController.updateCategoriaController)

router.delete("/delete/:id", authMiddleware, validaId, categoriaController.deleteCategoriaController)


module.exports = router;