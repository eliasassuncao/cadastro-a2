var mongoose = require('mongoose');

var schema = mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Genero: {
        type: String,
        required: true
    },
    CPF: {
        type: String,
        required: false
    },
    DDN: {
        type: String,
        required: true
    },
    Telefone: {
        type: String,
        required: true
    }
});

mongoose.model('Client', schema);