const { default: mongoose } = require("mongoose");
const categoriaService = require("../service/categoria.service");

const findCategoriaByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "O ID está inválido" });
        }

        const categoria = await categoriaService.findCategoriaByIdService(id);

        if (!categoria) {
            return res.status(404).send({ message: "A categoria não foi encontrada" });
        }

        return res.status(200).send(categoria);

    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Ocorreu um erro interno, tente novamente" });
    }
}

const findAllCategoriaController = async (req, res) => {
    try {
        const categorias = await categoriaService.findAllCategoriaService();

        if (!categorias) {
            return res.status(404).send({ message: "A categoria não foi encontrada" });

        }
        return res.status(200).send(categorias);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Ocorreu um erro interno, tente novamente" });
    }
}

const createCategoriaController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!body.nome) {
            return res.status(400).send({ message: "Preencha o campo nome!" })
        }

        const createdItem = await categoriaService.createCategoriaService(body);

        return res.status(201).send(createdItem);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Ocorreu um erro interno, tente novamente" });
    }
}

const updateCategoriaController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "O ID está inválido" });
        }
        if (!body.nome) {
            return res.status(400).send({ message: "Preencha o campo nome!" })
        }

        return res.status(200).send(await categoriaService.updateCategoriaServie(id, body));

    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Ocorreu um erro interno, tente novamente" });
    }
}

const deleteCategoriaController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "O ID está inválido" });
        }
        const removedItem = await categoriaService.deleteCategoriaService(id);

        if(!removedItem){
            return res.status(404).send({ message: "Nenhuma categoria encontrada" });

        }
            return res.status(200).send(removedItem);

    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Ocorreu um erro interno, tente novamente" });
    }
}

module.exports = {
    findAllCategoriaController,
    findCategoriaByIdController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}