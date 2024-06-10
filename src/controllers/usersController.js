const usersModel = require('../models/usersModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const newUser = async (req, res) => {
  try {
    const usuario = req.body
    const result = await usersModel.registerUsers(usuario)

    res.send(result)
  } catch (error) {
    console.log(error)
    res.send(error.detail)
  }
}

const getUser = async (req, res) => {
  try {
    const { email } = req.user
    const usuario = await usersModel.getUserInfo(email)

    res.send(usuario)
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  newUser,
  getUser
}