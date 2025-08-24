const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema({
    nome: {type: String, required: true, unique: true}
})

const Categoria = mongoose.model("categoria", CategoriaSchema)

module.exports = Categoria;


