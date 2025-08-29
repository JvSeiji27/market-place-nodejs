const pedidoService = require("../service/pedido.service")


const findPedidoByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        const pedido = await pedidoService.findPedidoByIdService(id);
        if (!pedido) {
            res.status(400).send({ message: "Nenhum pedido encontrado!" });
        }

        return res.status(200).send(pedido);

    } catch (err) {
        return res.status(500).send({ message: "Erro interno, tente mais tarde!!" })
    }
}

const findAllPedidosController = async (req, res) => {
    try {
        const pedidos = await pedidoService.findAllPedidosService();
        if (!pedidos) {
            res.status(400).send({ message: "Nenhum pedido encontrado!" });
        }
        return res.status(200).send(pedidos);

    } catch (err) {
        return res.status(500).send({ message: "Erro interno, tente mais tarde!!" })
    }
}

const createPedidoController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            userId: req.userId
        }
        const pedidoCreated = await pedidoService.createPedidoService(body);

        return res.status(201).send(pedidoCreated);

    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: "Erro interno, tente mais tarde!!" })
    }
}

const deletePedidoController = async (req, res) => {
    try {
        const pedidoDeleted = await pedidoService.deletePedidoService(req.params.id);

        return res.status(200).send(pedidoDeleted);
    } catch (err) {
        return res.status(500).send({ message: "Erro interno, tente mais tarde!!" })
    }
}

const updateStatusPedidoController = async (req, res) => {
    try {
        return res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id))
    } catch (err) {
        return res.status(500).send({ message: "Erro interno, tente mais tarde!!" })
    }
}

module.exports = {
    findAllPedidosController,
    findPedidoByIdController,
    createPedidoController,
    deletePedidoController,
    updateStatusPedidoController
}