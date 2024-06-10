require('dotenv').config()
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
  try {

    const { email } = req.body
    const token = jwt.sign({ email }, process.env.SECRET)
    console.log(`Usuario ${email} inició sesión`);
    res.send({ token })

  } catch (error) {
    res.status(error.code).send(error)
  }
}

module.exports = {
  signUp
}