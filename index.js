const express = require("express");
const database = require("./src/database/database")
const userRouter = require('./src/router/usuario.router')
const app = express();
const port = 3000;

app.use(express.json());

database.connectToDatabase();

app.use("/usuarios", userRouter);

app.get("/", (req, res) => {
    res.send("Bem-Vindo ao nosso Market-Place");
})


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})


