var mongoose = require('mongoose');

var schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    ddn: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

mongoose.model('Client', schema);