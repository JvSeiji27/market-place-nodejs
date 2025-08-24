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
    return Produto.findByIdAndUpdate(id, product, { new: true })
}

const deleteProductService = (id) => {
    return Produto.findByIdAndDelete(id);
}

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categoria: {
                    _id: categoria.id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            new: true,
            runValidators: true
        }
    )
}

const removeCategoriaProdutoService = (categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: categotia.id
        },
        {
            $pull: {
                categoria: {
                    _id: categoria.id
                }
            }
        },
        {
            new: true
        }
    )
}

module.exports = {
    findAllProductsService,
    findProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}