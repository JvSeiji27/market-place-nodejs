const mongoose = require("mongoose");

//por ser um middleware, sempre preciso usar o next de parâmetro tmb
const validaUsuario = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: "O campo 'nome' não foi preenchido" })
    }
    //posso esperar que os campos tenham um tipo especifico e posso fazer essas validações
    if (typeof (req.body.nome) != "string") {
        return res.status(400).send({ message: "O campo 'nome' deve ser uma string" })
    }

    if (!req.body.email) {
        return res.status(400).send({ message: "O campo 'email' não foi preenchido" })
    }

    if (!req.body.senha) {
        return res.status(400).send({ message: "O campo 'senha' não foi preenchido" })
    }

    if (!req.body.imagem) {
        return res.status(400).send({ message: "O campo 'imagem' não foi preenchido" })
    }

    if (!req.body.admin) {
        return res.status(400).send({ message: "O campo 'admin' não foi preenchido" })
    }
    return next();
}


const validacaoProduto = (req, res, next) => {
    let erros = [];
    if (!req.body.nome) {
        erros.push("nome");
    }
    if (!req.body.descricao) {
        erros.push("descricao");
    }
    if (!req.body.precoUnitario) {
        erros.push("precoUnitario");
    }
    if (!req.body.imagem) {
        erros.push("imagem");
    }
    if (!req.body.codigoBarra) {
        erros.push("codigoBarra");
    }

    if (erros.length === 1) {
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido` })
    } else if (erros.length > 1) {
        return res.status(400).send({ message: `Os campos '${erros}' devem ser preenchidos` })
    }

    return next()
}

const validacaoCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: "Preencha o campo 'nome'!!" })
    }
    return next();
}

const validacaoPedido = (req, res, next) => {
    let erros = [];
    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }

    if (!req.body.frete) {
        erros.push("frete");
    }

    if (req.body.concluido == null) {
        erros.push("concluido");
    }

    if (erros.length === 1) {
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido` })
    } else if (erros.length > 1) {
        return res.status(400).send({ message: `Os campos '${erros}' devem ser preenchidos` })
    }
    return next();
}

const validacaoCarrinho = (req, res, next) => {
    let erros = [];
    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }

    if (!req.body.frete) {
        erros.push("frete");
    }

    if (erros.length === 1) {
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido` })
    } else if (erros.length > 1) {
        return res.status(400).send({ message: `Os campos '${erros}' devem ser preenchidos` })
    }
    return next();
}

const validaId = (req, res, next) => {
  
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: "Informe um ID válido" })
    }

    return next();
}

const validacaoLogin = (req, res, next) => {
    let erros = [];
    if (!req.body.email) {
        erros.push("email");
    }

    if (!req.body.senha) {
        erros.push("senha");
    }

    if (erros.length === 1) {
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido` })
    } else if (erros.length > 1) {
        return res.status(400).send({ message: `Os campos '${erros}' devem ser preenchidos` })
    }
    return next();

}
module.exports = {
    validaUsuario,
    validacaoProduto,
    validacaoCategoria,
    validacaoPedido,
    validacaoCarrinho, validaId, validacaoLogin
}