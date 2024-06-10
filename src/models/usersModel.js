// Importamos la DB y bcrypt

const database = require('../database/config')
const bcrypt = require('bcryptjs')

//Función para registrar usuarios

const registerUsers = async ({ email, password, rol, lenguage }) => {
  const encryptedPass = bcrypt.hashSync(password)

  const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *"
  const values = [email, encryptedPass, rol, lenguage]

  const { rows: usuario } = await database.query(consulta, values)
  return usuario
}

//Función para verificar credenciales

const verifyUsers = async ({ email, password }) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1"
  const values = [email]

  const { rows: [usuario] } = await database.query(consulta, values)
  const { password: encryptedPass } = usuario
  const correctPass = bcrypt.compareSync(password, encryptedPass)

  return correctPass
}

//Función para obtener información del usuario (GET)

const getUserInfo = async (email) => {
  const consulta = "SELECT email, rol, lenguage FROM usuarios WHERE email = $1"
  const values = [email]

  const { rows: usuario } = await database.query(consulta, values)

  return usuario
}

const usersModel = {
  registerUsers,
  verifyUsers,
  getUserInfo
}

module.exports = usersModel