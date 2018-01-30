var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/cadastro');

http.createServer(app).listen(4200, function() {
    console.log('Servidor rodando');
})