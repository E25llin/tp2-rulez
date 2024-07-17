const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/conta', (request, response) => {
   response.render('conta')
})

app.get('/calculadora', (request, response) => {
   var resultado = " "
   response.render('calculadora', {resultado})

})

app.get('/soma', (request, response) => {
   resultado = parseFloat(request.query.n1) + parseFloat(request.query.n2);
   response.render('calculadora')
   
})

app.get('/subt', (request, response) => {
   resultado = parseFloat(request.query.n1) - parseFloat(request.query.n2);
   response.render('calculadora')
    
})

app.get('/multi', (request, response) => {
   resultado = parseFloat(request.query.n1) * parseFloat(request.query.n2);
   response.render('calculadora')

})

app.get('/divi', (request, response) => {
   resultado = parseFloat(request.query.n1) / parseFloat(request.query.n2);
   response.render('calculadora')
   
})

const PORT = 8000
app.listen(PORT, () => {
   console.log("Servidor rodando");
})

