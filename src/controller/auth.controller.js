const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
   try{
     const {email, senha} = req.body;

    const user = await authService.loginService(email);

    console.log(senha);
    console.log(user.senha);
    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if(!isPasswordValid){
        return res.status(400).send({message: "Senha inválida!"});
    }

    const token = authService.generateToken(user.id);
    res.status(200).send({email, token});
   }
   catch(err){
    console.log(err);
    return res.status(500).send({message: "Erro login, tente de novo"});
   }
}

module.exports = {loginController}