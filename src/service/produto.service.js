const Produto = require("../model/Produto.model")

const findProductByIdService = (id) => {
    return Produto.findById(id);
}

const findAllProductsService = () => {
    return Produto.find();
}

const createProductService = (product) => {//body
    return Produto.create(product)
}

const updateProductService = (id, product) => {
    return Produto.findByIdAndUpdate(id, product, {new:true})
}

const deleteProductService = (id) => {
    return Produto.findByIdAndDelete(id);
}

module.exports = {
    findAllProductsService,
    findProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
}