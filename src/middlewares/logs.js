const moment = require('moment')

const handleLogs = (req, res, next) => {
  const time = moment().format('DD/MM/YY HH:mm:ss')
  const { method, originalUrl } = req
  const path = originalUrl.split('?')[0]
  console.log(`En este momento: [${time}] se realizó una consulta ${method} en ${path}`)
  next()
}

module.exports = {
  handleLogs
}