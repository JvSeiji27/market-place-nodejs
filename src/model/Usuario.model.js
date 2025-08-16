const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    imagem: {type: String, required: true},
    enderecos: [
        {
            rua:{ type: String, required: true},
            numero: {type: Number, required: true},
            complemento: {type: String, required: false},
            CEP: {type: String, required: true},
            createdAt: {type: Date, required: true}
        }
    ],
    createAt: {type: Date, required: true},
    produtos_fav: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos"},
            createdAt: {type: Date, required: true}
        }
    ],
    admin: {type: Boolean, required: true, default: false}
});

const User = mongoose.model("usuario", UserSchema);

module.exports = User;