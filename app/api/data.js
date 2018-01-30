var mongoose = require('mongoose');

var api = {};

var model = mongoose.model('Client');

api.list = function(req, res){
    var promise = model.find();

    promise.then(function(clients) {
        res.json(clients);
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

api.searchForId = function(req, res) {
    model
        .findById(req.params.id)
        .then(function(client) {
            if(!client) throw Error('~~~~ não encontrado');
            res.json(client);
        }, function(error) {
            console.log(error);
            res.status(404).json(error);
        });
}

api.removeForId = function(req, res) {
    model
        .remove({_id:req.params.id})
        .then(function() {
            res.sendStatus(204);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

api.add = function(req, res) {
    model
        .create(req.body)
        .then(function(client) {
            res.json(client);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

api.update = function(req, res) {
    model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(client) {
            res.json(client);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        })
}

module.exports = api;