module.exports = function(app) {
    app.get('/is-user-online/:id(\\d+)', initObjects, isUserOnlineHandler);
    app.get('/history', initObjects, historyHandler);
}

var initObjects = function(req, res, next) {
    if(!req.session.history) {
        req.session.history = {};
    }

    next()
}

var isUserOnlineHandler = function(req, res) {
    req.session.history[req.params.id] = Math.round(Math.random());
    res.status(200).send();
};

var historyHandler = function(req, res) {
    var response = req.session.history;

    req.session.history = {};

    res.header("Content-Type", "application/json")
        .status(200)
        .send(response);
};