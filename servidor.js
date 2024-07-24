const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/conta', (request, response) => {
   response.render('conta')
})

app.get('/calculadora', (request, response) => {
   var resultado = ""
   response.render('calculadora', {resultado})

})

app.post('/soma', (request, response) => {
   resultado = parseFloat(request.body.n1) + parseFloat(request.body.n2);
   response.render('calculadora',  {resultado})
   
})

app.post('/subt', (request, response) => {
   resultado = parseFloat(request.body.n1) - parseFloat(request.body.n2);
   response.render('calculadora',  {resultado})
    
})

app.post('/multi', (request, response) => {
   resultado = parseFloat(request.body.n1) * parseFloat(request.body.n2);
   response.render('calculadora',  {resultado})

})

app.post ('/divi', (request, response) => {
   resultado = parseFloat(request.body.n1) / parseFloat(request.body.n2);
   response.render('calculadora',  {resultado})
   
})

const PORT = 8000
app.listen(PORT, () => {
   console.log("Servidor rodando");
})

