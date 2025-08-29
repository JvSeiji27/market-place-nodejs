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
    return User.findByIdAndUpdate(id, user, { new: true });
}

const removeUserService = (id) => {
    return User.findByIdAndDelete(id);
}

//FAZER DEPOIS pela dependência de outros fatores
//findOneAndUpdate (filtro, atualização e opção)
//Um objeto dentro de outro é findByIdAndUpdate
const addUserAddressService = (id, endereco) => { //Precisa de um Id para o usuário e um body com as informações
    return User.findOneAndUpdate({ //vou achar um usuario com esse id e vou atualizar endereços como?? adicionando um endereco
        _id: id
    },
        {
            $push: {
                enderecos: endereco
            }
        },
        {
            new: true,
            runValidators: true
        }
    )
}

const removeUserAddressService = (id, addressId) => {
    return User.findOneAndUpdate({
        _id: id, "enderecos._id": addressId //só atualiza se o endereco existir
    },
        {
            $pull: {
                enderecos: {
                    _id: addressId
                }
            }
        },
        {
            new: true,
        }
    )
}

const addUserFavProductService = (id, produto) => {
    return User.findOneAndUpdate(
        {
            _id:id
        },
        {
            $push: {
                produtos_fav: {
                    _id: produto
                }
            }
        },
        {
            new: true
        }

)
}

const removeUserFavProductService = (id, productId) => {
    console.log(productId + " aqui");
    return User.findOneAndUpdate(
        {
            _id: id, "produtos_fav._id": productId
        },{
            $pull: {
                produtos_fav: {
                    _id: productId
                }
            }
        },{
            new: true
        }
    )
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