const usersRouter = require('express').Router()
const { newUser, getUser } = require('../../controllers/usersController')
const validateTkn = require('../../middlewares/auth')

usersRouter.post('/', newUser)
usersRouter.get('/', validateTkn, getUser)

module.exports = usersRouter