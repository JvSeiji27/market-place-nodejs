const express = require("express");
require("dotenv").config();
const database = require("./src/database/database") //arquivo de conexão com o banco
const userRouter = require('./src/router/usuario.router') //arquivo de rota do usuário
const authRouter = require("./src/router/auth.router")
const app = express();
const port = 3000;

app.use(express.json());

database.connectToDatabase();

app.use("/usuarios", userRouter); //rotas dos usuários
app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Bem-Vindo ao nosso Market-Place");
})


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})


