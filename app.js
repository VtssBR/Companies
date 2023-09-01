//UTILIZADO O EXPRESS PARA A APLICAÇÃO WEB E ROTAS.
const express = require("express");
const app = express();

//UTILIZADO PARA TEMPLATE E UTILIZAÇÃO DE LOGICA JS DIRETAMENTE COM HTML
const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('./public'))

//UTILIZADO PARA REQUISIÇÕES DO FORMULARIO
const bodyParse = require("body-parser");
app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

const Cadastro = require("./models/Cadastro");

//SELECIONADO AS ROTAS
app.get('/', function (req, res) {
  res.render('create');
})

app.get('/create', function (req, res) {
  res.render('create');
})

app.get('/cadastrarNovo', function(req,res){
  res.redirect('/create')
})
app.get('/visualizarCadastro',function(req, res){
  res.redirect('/read')
})

app.post('/cadastro', function (req, res) {
  Cadastro.create({
    razaoSocial: req.body.razaoSocial,
    endereco: req.body.endereco,
    nome: req.body.nome,
    email: req.body.email
  }).then(function () {
    res.redirect('/read')
  }).catch(function (err) {
    res.send("Erro cadastro nao realizado: " + err)
  })
})

app.get('/read', function(req, res){
  Cadastro.findAll().then(function(listagem){
    res.render('read', {listagem : listagem});
  })
});

app.get('/delete/:id', function(req, res){
    Cadastro.destroy({
      where: {'id': req.params.id}
    }).then(function(){
      res.redirect('/read')
    }).catch(function(err){
      res.send("Falha ao Apagar")
    })
})

app.listen(8080);