const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')
const app = express()

// Importamos el módulo para manejar logs
const { handleLogs } = require('./middlewares/logs')


//utilizamos los middlewares de Express y CORS
app.use(express.json())
app.use(cors())

//Llamamos al enrutador
app.use('/', handleLogs, routes)

module.exports = app