const mongoose = require("mongoose")

const carrinhoSchema = mongoose.Schema({
    produtos: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "produto"},
            quantidade: {type: Number, required: true}
        }
    ],
    createdAt: {type: Date, required: true, default: Date.now},
    precoTotal: {type: Number, required: true},
    frete: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "usuario", required: true} //armazena um _id faz referência ao model chamadoo usuário
})

const Carrinho = mongoose.model("carrinho", carrinhoSchema);

module.exports = Carrinho;