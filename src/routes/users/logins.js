const loginRouter = require('express').Router()
const validateUserExistance = require('../../middlewares/login')
const { signUp } = require('../../controllers/loginController')

loginRouter.post('/', validateUserExistance, signUp)

module.exports = loginRouter