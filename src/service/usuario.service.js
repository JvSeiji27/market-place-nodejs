const User = require("../model/Usuario.model");

const findUserByIdService = (id) => {
    return User.findById(id);
}

const findAllUsersService = () => {
    return User.find();
}

const createUserService = (user) => {
    return User.create(user);
}

const updateUserService = (id, user) => {
    return User.findByIdAndUpdate(id, user, {new: true});
}

const removeUserService = (id) => {
    return User.findByIdAndDelete(id);
}

//FAZER DEPOIS pela dependência de outros fatores
const addUserAddressService = (id, endereco) => { //Precisa de um Id para o usuário e um body com as informações
    
}

const removeUserAddressService = (id) => {

}

const addUserFavProductService = (id, produto) => {

}

const removeUserFavProductService = (id) => {

}
module.exports = {
    findAllUsersService,
    findUserByIdService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    addUserFavProductService,
    removeUserAddressService,
    removeUserFavProductService
}