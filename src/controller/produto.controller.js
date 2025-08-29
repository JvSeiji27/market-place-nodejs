const productService = require("../service/produto.service");
const mongoose = require("mongoose")



const findProductByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id) || !id) {
            return res.status(400).send({ message: "ID inválido!" });
        }

        const user = await productService.findProductByIdService(id);

        if (!user) {
            return res.status(404).send({ message: "Nenhum produto encontrado!" })
        }

        return res.status(200).send(user);

    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const findAllProductsController = async (req, res) => {
    try {
        const users = await productService.findAllProductsService();

        if (!users) {
            return res.status(404).send({ message: "Nenhum produto encontrado!" })
        }

        return res.status(200).send(users);

    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        const obj = await productService.createProductService(corpo);

        return res.status(200).send(obj);


    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const updateProductController = async (req, res) => {
    try {
        res.send(await productService.updateProductService(req.params.id, req.body));


    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const deleteProductController = async (req, res) => {
    try {

        res.send(await productService.deleteProductService(req.params.id))

    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const addCategoriaProdutoController = async (req, res) => {
    try {


        const categoria = await productService.addCategoriaProdutoService(req.params.id, req.body)
        res.status(200).send(categoria);

    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

//se o findOne nao encontrar o retorno é NULL

const removeCategoriaProdutoController = async (req, res) => {
    try {

        const categoria = await productService.removeCategoriaProdutoService(req.params.id, req.body)

        if (!categoria) {
            res.status(400).send({ message: "Algo deu errado na remoção da categoria" })
        }

        res.status(200).send(categoria);

    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

module.exports = {
    findAllProductsController,
    findProductByIdController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoController,
    removeCategoriaProdutoController

}