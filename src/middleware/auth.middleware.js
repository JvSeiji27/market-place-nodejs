//código que vai ser ativado no meio da passagem entre a rota e o controller, sempre quando uma rota for chamada, resolve o que tem no middleware e dps vai na rota
const jwt = require("jsonwebtoken");

const {findUserByIdService} = require("../service/usuario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({message: "O token não foi informado!"});
    }
    const parts = authHeader.split(" ") // ["Bearer, token"]
    if(parts.length !== 2){
        return res.status(401).send({message: "O token inválido!"}); //nao tem as duas partes
    }
    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({message: "O token  foi mal formatado!"});
    }

    jwt.verify(token, "asjiakosoahsuijasans", async (err, decoded) => {
        if(err){
            return res.status(500).send({message: "Token inválido"});
        }
        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){ //usuários que forma excluídos, mas o token é "válido"
            return res.status(401).send({message: "Token inválido"});
        }
        req.userId = decoded.id; //o req para aquele controller passa a ter o userId
        return next();
    })
}