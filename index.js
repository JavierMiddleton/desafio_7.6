require('dotenv').config()
const app = require('./src/app')


// Levantamos el puerto para que el servidor "escuche"
const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Servidor en ${PORT}`))