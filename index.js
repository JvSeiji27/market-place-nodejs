const express = require("express");
require("dotenv").config();
const database = require("./src/database/database") //arquivo de conexão com o banco
const userRouter = require('./src/router/usuario.router') //arquivo de rota do usuário
const authRouter = require("./src/router/auth.router")
const categoriaRouter = require("./src/router/categoria.router")
const productRouter = require("./src/router/produto.router")//arquivo de rota produtos
const app = express();
const port = 3000;

app.use(express.json());

database.connectToDatabase();

app.use("/usuarios", userRouter); //rotas dos usuários
app.use("/auth", authRouter);
app.use("/produtos", productRouter);
app.use("/categorias", categoriaRouter);

app.get("/", (req, res) => {
    res.send("Bem-Vindo ao nosso Market-Place");
})


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})


