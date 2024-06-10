require("dotenv").config();
const jwt = require("jsonwebtoken");
const usersModel = require("../models/usersModel");

const validateUserExistance = async (req, res, next) => {
  try {
    const credentials = req.body;
    const match = await usersModel.verifyUsers(credentials);

    if (!match) {
      throw {
        code: 401,
        message: "Usuario no existe",
      };
    }

    const { email } = req.body;
    const token = jwt.sign({ email }, process.env.SECRET);
    req.token = token;
    next();
  } catch (error) {
    res.status(error.code).send(error);
  }
};

module.exports = validateUserExistance;
