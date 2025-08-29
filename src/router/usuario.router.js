const express = require("express");
const router = express.Router();
const userController = require("../controller/usuario.controller")
const authMiddleware = require("../middleware/auth.middleware")
const { validaUsuario, validaId } = require("../middleware/validacao.middleware")
//OBS: todos devem começar com barra

//ROTAS GET
router.get("/findById/:id", authMiddleware, validaId, userController.findUserByIdController);
router.get("/findAll/", authMiddleware, userController.findAllUsersController);

//ROTAS POST
// A ordem importa, preciso do token antes e dps valido dados. no create nao preciso do login? nao faz sentido
router.post("/create/", validaUsuario, userController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaId, userController.addUserAddressController);
router.post("/addFavProduct/:id", authMiddleware, validaId, userController.addUserFavProductController);

//ROTAS PUT
router.put("/update/:id", authMiddleware, validaId, validaUsuario, userController.updateUserController);

//ROTAS DELETE
router.delete("/remove/:id", authMiddleware, validaId, userController.removeUserController);
router.delete("/removeAddress/", authMiddleware, userController.removeUserAddressController);
router.delete("/removeFavProduct/:id", authMiddleware, validaId, userController.removeUserFavProductController);


module.exports = router;