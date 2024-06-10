const router = require('express').Router()
const loginRoutes = require('./users/logins')
const userRoutes = require('./users/users')

router.use('/login', loginRoutes)
router.use('/usuarios', userRoutes)

module.exports = router