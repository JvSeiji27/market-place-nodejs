const Pedido = require("../model/Pedido.model")


const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}
 
const findAllPedidosService = () => {
    return Pedido.find();
}

const createPedidoService = (body) => {
    return Pedido.create(body)
}

const deletePedidoService = (id) => {
    return Pedido.findByIdAndDelete(id);
}

const updateStatusPedidoService = (id) => {
    return Pedido.findOneAndUpdate(
        {_id: id},
        {
          $set:{concluido: true } 
        },
        {
            new: true
        }
    )
}


module.exports = {
    findAllPedidosService,
    findPedidoByIdService,
    createPedidoService,
    deletePedidoService,
    updateStatusPedidoService
}