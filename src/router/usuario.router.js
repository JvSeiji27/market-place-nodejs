const express = require("express");
const  router = express.Router();
const userController = require("../controller/usuario.controller")

router.get("findById/:id", userController.findUserByIdController);
router.get("findAll/", userController.findAllUsersController);

router.post("create/", userController.createUserController);
router.post("addAddress/:id",userController.addUserAddressController);
router.post("addFavProduct/:id", userController.addUserFavProduct);

router.put("update/:id", userController.updateUserController);

router.delete("remove/:id", userController.removeUserController);
router.delete("removeAddress/", userController.removeUserAddressController);
router.delete("removeFavProduct/", userController.removeUserFavProduct) ;



module.exports = router;