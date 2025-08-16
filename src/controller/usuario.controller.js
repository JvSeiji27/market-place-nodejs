
const findUserByIdController = async (req, res) => {
    try {
        const id = req.params.id;
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const findAllUsersController = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const createUserController = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const updateUserController = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const removeUserController = async (res, req) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const addUserAddressController = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const removeUserAddressController = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const addUserFavProduct = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}

const removeUserFavProduct = async (req, res) => {
    try {

    } catch (err) {
        console.log(err.message);
        return res.status(500).send({ message: "Erro inesperado tente novamente!" })
    }
}



module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProduct,
    removeUserFavProduct



}