const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/market-place")
        .then(() => {
            console.log("Conexão feita com o banco de dados");
        })
        .catch((err) => {
            return console.log(`Erro ao conectar ao Banco de Dados: ${err}`); //precisa ser um return para meio que parar o fluxo
        })
}

module.exports = { connectToDatabase }