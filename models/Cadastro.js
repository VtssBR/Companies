const db = require('./db')

// SEQUELIZE CRIA UMA TABELA UTILIZANDO UMA CONDIÇÃO, APENAS CRIA UMA TABELA SE A MESMA NAO EXISTIR
// CREATE TABLE IF NOT EXISTS `users`
const Cadastro = db.conn.define('user',{
    razaoSocial: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },

}
);
// FORÇAR A CRIAÇÃO DA TABELA 
//Cadastro.sync({force: true});

module.exports = Cadastro;