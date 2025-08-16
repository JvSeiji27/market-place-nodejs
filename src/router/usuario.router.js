const express = require("express");
const  router = express.Router();
const userController = require("../controller/usuario.controller")

//ROTAS GET
router.get("findById/:id", userController.findUserByIdController);
router.get("findAll/", userController.findAllUsersController);

//ROTAS POST
router.post("create/", userController.createUserController);
router.post("addAddress/:id",userController.addUserAddressController);
router.post("addFavProduct/:id", userController.addUserFavProductController);

//ROTAS PUT
router.put("update/:id", userController.updateUserController);

//ROTAS DELETE
router.delete("remove/:id", userController.removeUserController);
router.delete("removeAddress/", userController.removeUserAddressController);
router.delete("removeFavProduct/", userController.removeUserFavProductController) ;



module.exports = router;