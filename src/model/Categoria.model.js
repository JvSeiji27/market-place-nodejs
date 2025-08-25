const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
    nome: {type: String, required: true, unique: true},
     createAt: {type: Date, required: true, default: Date.now()}
})

const Categoria = mongoose.model("categoria", CategoriaSchema)

module.exports = Categoria;


