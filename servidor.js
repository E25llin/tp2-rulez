const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/conta', (request, response) => {
   response.render('conta')
})

app.get('/calu', (request, response) => {
   response.render('calculadora')
})

app.get('/lua', (request, response) => {
   response.render('calculadora', {resultado: ''})
})

app.get('/soma', (request, response) => {
   soma = parseFloat(request.query.n1) + parseFloat(request.query.n2);
   response.render('calculadora', {resultado: soma})
   
})

app.get('/subt', (request, response) => {
   subt = parseFloat(request.query.n1) - parseFloat(request.query.n2);
   response.render('calculadora', {resultado: subt})
    
})

app.get('/multi', (request, response) => {
   multi = parseFloat(request.query.n1) * parseFloat(request.query.n2);
   response.render('calculadora', {resultado: multi})

})

app.get('/divi', (request, response) => {
   soma = parseFloat(request.query.n1) / parseFloat(request.query.n2);
   response.render('calculadora', {resultado: divi})
   
})

const PORT = 8000
app.listen(PORT, () => {
   console.log("Servidor rodando");
})

