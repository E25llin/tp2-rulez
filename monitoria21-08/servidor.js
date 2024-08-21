const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('index', { resultado: "", soma:""})
})
app.post('/lua', (request, response) => {
    resultado = `Bom dia, ${request.body.usuario}.`
    soma = parseFloat(request.body.n1) + parseFloat(request.body.n2)
    response.render('index')
})
const PORT = 8000
app.listen(PORT, () => {
    console.log("Servidor rodando");
})
