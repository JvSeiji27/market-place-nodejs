const User = require("../model/Usuario.model");
const jwt = require("jsonwebtoken");
const loginService = (email) => {
    return User.findOne({email: email}).select("senha"); //retorna um user so com esse campo
}

const generateToken = (userId) => {
    return jwt.sign({id: userId}, process.env.SECRET, {expiresIn: "1d"})
}

module.exports = {loginService, generateToken
}