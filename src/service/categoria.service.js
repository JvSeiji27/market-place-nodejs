const Categoria = require("../model/Categoria.model")

const findCategoriaByIdService = (id) => {
    return Categoria.findById(id);
}

const findAllCategoriaService = () => {
    return Categoria.find();
}

const createCategoriaService = (body) => {
    return Categoria.create(body);
}

const updateCategoriaServie = (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, { new: true });
}

const deleteCategoriaService = (id) => {
    return Categoria.findByIdAndDelete(id);
}


module.exports = {
    findCategoriaByIdService,
    findAllCategoriaService,
    createCategoriaService,
    updateCategoriaServie,
    deleteCategoriaService
}