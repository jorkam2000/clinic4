const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: req.query, // Permitimos filtrar usuarios pasando una query desde el cliente. Si no se pasa ninguna query, devolverá a todos los usuarios
    });

    if (!users) {
      res.status(404).json({
        message: "No users found",
        result: users,
      });
    }

    res.status(200).json({
      message: "All Users fetched",
      result: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all users",
      result: error,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      // include: {
      //   model: Patient, // EAGER LOADING. Devolvemos la info del usuario incluyendo en el mismo objeto la información de contacto que tenga relacionada
      // },
    });

    if (!user) {
      res.status(404).json({
        message: "No user found",
        result: user,
      });
    }

    res.status(200).json({
      message: "User fetched",
      result: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

const getOwnProfile = async (req, res) => {
  try {
    // TODO: Cambiar la forma de obtener el id del usuario logueado
    // const user = await User.findByPk(res.locals.user.id, {
    const user = await User.findByPk(1, {
      // include: [
      //   // EAGER LOADING: Devolvemos la info de contacto y todos los chistes que tenga como favoritos
      //   {
      //     model: ContactInfo,
      //   },
      //   {
      //     model: Joke,
      //   },
      // ],
    });

    if (!user) {
      res.status(404).json({
        message: "No user found",
        result: user,
      });
    }

    res.status(200).json({
      message: "User fetched",
      result: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

// Función de creación de usuario que emplearía un administrador
const createUser = async (req, res) => {
  try {
    //Debemos encriptar la contraseña, igual que en el signup
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALTS));
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created",
      result: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating user",
      result: error,
    });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const response = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // La función de update y destroy de sequelize devuelve un array con un 0 si no ha encontrado al usuario o no ha hecho cambios, y un array con un 1 si ha ido todo bien
    if (response === 0) {
      res.status(404).json({
        message: "No user found",
        result: response,
      });
    }

    res.status(200).json({
      message: "User updated",
      result: req.body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error updating user",
      result: error,
    });
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      res.status(404).json({
        message: "No user found",
        result: user,
      });
    }

    res.status(200).json({
      message: "User deleted",
      result: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one user",
      result: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateOneUser,
  deleteOneUser,
};
