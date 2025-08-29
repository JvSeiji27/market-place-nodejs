const User = require("../model/Usuario.model");
const { createProductService } = require("../service/produto.service");
const userService = require("../service/usuario.service")
const mongoose = require("mongoose")
const findUserByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "O ID está invalido!" });

        } else {
            const user = await userService.findUserByIdService(id);
            if (!user) {
                return res.status(404).send({ message: "Nenhum usuário encontrado!" });

            }
            return res.status(200).send(user);
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

//Object.keys(users).length === 0 é para o Create

//O findAll retorna um vetor e um vetor vazio em js não é nulo 
const findAllUsersController = async (req, res) => {
    try {
        const users = await userService.findAllUsersService();
        if (users.length === 0) {
            return res.status(404).send({ message: "Nenhum usuário foi encontrado" });
        } else {
            return res.status(200).send(users);

        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const createUserController = async (req, res) => {
    try {
        let user = req.body;
        if (!user || Object.keys(user).length === 0) {
            return res.status(400).send({ message: "Body vazio" })
        }
        const parts = ["nome", "email", "senha", "imagem"];
        for (const part of parts) {
            if (!user[part]) {
                return res.status(400).send(`Este campo "${part}" está vazio`);
            }
        }
        user = await userService.createUserService(user);
        return res.status(200).send(user);
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const updateUserController = async (req, res) => {
    try {
        const id = req.params.id;
        let user = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "O ID está invalido!" });
        }

        if (!user || Object.keys(user).length === 0) {
            return res.status(400).send({ message: "Body vazio" })
        }
        const parts = ["nome", "email", "senha", "imagem"];
        for (const part of parts) {
            if (!user[part]) {
                return res.status(400).send(`Este campo "${part}" está vazio`);
            }
        }
        user = await userService.updateUserService(id, user);
        return res.status(200).send(user);

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const removeUserController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "O ID está invalido!" });
        }
        const removedUser = await userService.removeUserService(id);
        if (!removedUser) {
            return res.status(404).send({ message: "Usuário não encontrado!" });

        } else {
            return res.status(200).send({ removedUser });

        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const addUserAddressController = async (req, res) => {
    try {
        const endereco = await userService.addUserAddressService(req.params.id, req.body);
        //caso não ache, retorna null
        if (endereco) {
            return res.status(200).send({ message: "Endereço adicionado com sucesso" })
        } else {
            return res.status(400).send({ message: "Algo deu errado no endereço para a adição!" })

        }
    } catch (err) {
        if (err.name == "ValidationError") {
            return res.status(400).send({ message: "Erro de validação. Preencha todos campos!" });
        }
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const removeUserAddressController = async (req, res) => {
    try {
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        if (endereco) {
            return res.status(200).send({ message: "Endereço removido com sucesso" })
        } else {
            return res.status(400).send({ message: "Algo deu errado no endereço para remoção!" })

        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const addUserFavProductController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body.o;

        productAdd = await userService.addUserFavProductService(id, body);

        return res.status(200).send(productAdd)

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const removeUserFavProductController = async (req, res) => {
    try {
        const product = await userService.removeUserFavProductService(req.params.id, req.body._id);

        return res.status(200).send(product)
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}



module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController



}