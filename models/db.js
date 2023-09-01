const Sequelize = require('sequelize');

// SETADO VALORES PARA CONEXÃO COM O BANCO DE DADOS 
const conn = new Sequelize("vitordb","root","vitor123", {
    host: "localhost", //LOCAL
    dialect: 'mysql' //BANCO DE DADOS UTILIZADO
});

//REALIZA A CONEXÃO COM O BANCO DE DADOS
conn.authenticate()
.then(function(){
    console.log('Conexão realizada com sucesso')
}).catch(function(err){
    console.log('Erro de conexão' + err)
})


module.exports ={
    conn: conn,
    Sequelize: Sequelize
} 