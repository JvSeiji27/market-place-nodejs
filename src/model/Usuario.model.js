const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
            createdAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    createAt: {type: Date, required: true, default: Date.now()},
     produtos_fav: [
         {
             _id: {type: mongoose.Schema.Types.ObjectId, required: true,  ref: "produtos"},
             createdAt: {type: Date, required: true, default: Date.now()}
         }
     ],
    admin: {type: Boolean, required: true, default: false}
});

//Camadas de proteção, se invadirem o banco não saberá qual é a senha original

UserSchema.pre("save", async function (next) {
    if(this.senha){
        this.senha = await bcrypt.hash(this.senha, 10); //embaralhamento 10 vezes
    }
    next(); //middleware
})

const User = mongoose.model("usuario", UserSchema);

module.exports = User;