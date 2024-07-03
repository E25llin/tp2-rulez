const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
   let conta = 2+2
   response.send(`2 + 2 é igual a ${conta}`)
})
app.listen(8080)