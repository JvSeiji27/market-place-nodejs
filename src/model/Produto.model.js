const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    descricao: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    imagem: { type: String, required: true },
    codigoBarra: { type: Number, required: true, unique: true },
    categorias: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "categoria" },
            createAt: { type: Date, required: true, default: Date.now }
        }
    ]

})

const Produto = mongoose.model("produto", ProductSchema);

module.exports = Produto;