var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/cadastro');
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.post('/send', function(req, res) {

    if(req.body.email == "" || req.body.subject == "") {
        res.send("Error: Algum campo está vázio.");
        return false;
    }

    var smtpTransport = nodemailer.createTransport("SMTP",{
            host: "smtp.gmail.com",
            secureConnection: true,
            port: 465,
            auth: {
                user: 'php.store.elias@gmail.com',
                pass: 'suaSenha'
            }
    });
    
    var mailOptions = {
        from: "NODEJS <yourgmail@gmail.com>",
        to: req.body.email,
        subject: req.body.subject,
        html: "<b>" + req.body.message + "</b>"
    }
    
    smtpTransport.sendMail(mailOptions, function (error, resp) {
        if(error) {
            res.send("Erro: " + error );
        }else {
            res.send("Email enviado com sucesso!");
        }
    });
});


http.createServer(app).listen(4200, function() {
    console.log('Servidor rodando');
})