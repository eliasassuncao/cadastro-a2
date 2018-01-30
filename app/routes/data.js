module.exports = function(app) {
    var api = app.api.data;

    app.route('/v1/data')
        .get(api.list)
        .post(api.add);

    app.route('/v1/data/:id')
        .get(api.searchForId)
        .delete(api.removeForId)
        .put(api.update);
}