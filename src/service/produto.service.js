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
                categorias: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            new: true
            
        }
    )
}

const removeCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id , "categoria._id": categoria._id
        },
        {
            $pull: {
                categoria: {
                    _id: categoria._id
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