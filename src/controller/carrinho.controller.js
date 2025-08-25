const { default: mongoose } = require("mongoose");
const carrinhoService = require("../service/carrinho.service")

const findCarrinhoByIdController = async (req, res) => {
    try{
        const id = req.params.id;
        const carrinho = await carrinhoService.findCarrinhoByIdService(id);

        if(!carrinho){
            return res.status(404).send({message:"Nenhum carrinho foi encontrado"})
        }
        return res.status(200).send(carrinho)
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({message: "Erro inesperado tente novamente"})
    }
}

const findAllCarrinhosController = async (req, res) => {
    try{
        const carrinhos = await carrinhoService.findAllCarrinhosService();
        if(!carrinhos){
            return res.status(404).send({message:"Nenhum carrinho foi encontrado"})
        }else{
            return res.status(200).send(carrinhos);
        }
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({message: "Erro inesperado tente novamente"})
    }
}

const createCarrinhoController = async (req, res)=> {
    try{
        const body = {
            ...req.body,
            userId: req.UserId
        }
        
        return await carrinhoService.createCarrinhoService(body);
        

        
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({message: "Erro inesperado tente novamente"})
    }
}

const updateCarrinhoController = async (req,res) => {
    try{
        const carrinhos = await carrinhoService.updateCarrinhoService(req.params.id, req.params.body);

        return res.status(200).send(carrinhos);
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({message: "Erro inesperado tente novamente"})
    }
}

const deleteCarrinhoController = async (req, res) => {
    try{
        return res.status(200).send(await(carrinhoService.deleteCarrinhoService(req.params.id)));
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({message: "Erro inesperado tente novamente"})
    }
}


module.exports = {
    findAllCarrinhosController,
    findCarrinhoByIdController,
    updateCarrinhoController,
    deleteCarrinhoController,
    createCarrinhoController
}