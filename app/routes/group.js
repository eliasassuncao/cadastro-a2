module.exports = function(app) {
    var api = app.api.group;

    app.get('/v1/cadastrados', api.list);
}