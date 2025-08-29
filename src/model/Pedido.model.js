const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "produto" },
            quantidade: { type: Number, required: true }
        }
    ],
    createdAt: { type: Date, required: true, default: Date.now },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "usuario", required: true },
    concluido: {type: Boolean, required: true}
})

const Pedido = mongoose.model("pedido", pedidoSchema);

module.exports = Pedido