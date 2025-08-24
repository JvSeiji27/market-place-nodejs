const productService = require("../service/produto.service");
const mongoose = require("mongoose")

const findProductByIdController = async (req, res) => {
    try{
        const id = req.params.id;
    if(mongoose.Types.ObjectId.isValid(id) || !id){
        return res.status(400).send({message: "ID inválido!"});
    }

    const user = await productService.findProductByIdService(id);

    if(!user){
        return res.status(404).send({message: "Nenhum produto encontrado!"})
    }

    return res.status(200).send(user);

    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Erro inesperado tente novamente!"})
    }
}

const findAllProductsController = async (req, res) => {
  try{
      const users = await productService.findAllProductsService();

      if(!users){
        return res.status(404).send({message: "Nenhum produto encontrado!"})
      }

      return res.status(200).send(users);
    
    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Erro inesperado tente novamente!"})
    }
}

const createProductController = async (req, res) => {
      try{
       const corpo = {
        ...req.body,
        userId: req.userId, //ja vou ter o id do usuário
        createdAt: new Date()
       }
       const obj = await productService.createProductService(corpo);

       return res.status(200).send(obj);

    
    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Erro inesperado tente novamente!"})
    }
}

const updateProductController = async (req, res) => {
  try{
    res.send(await productService.updateProductService(req.params.id, req.body));

    
    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Erro inesperado tente novamente!"})
    }
}

const deleteProductController = async (req, res) => {
  try{
    
        res.send(await productService.deleteProductService(req.params.id))
    
    }catch(err){
        console.log(err);
        return res.status(500).send({message: "Erro inesperado tente novamente!"})
    }
}

module.exports = {
    findAllProductsController,
    findProductByIdController,
    createProductController,
    updateProductController,
    deleteProductController
}