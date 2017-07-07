// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {



    // Gets index page
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/test', function(req, res) {
        res.render('test');
    });

    app.get('/rankbycity', function(req, res) {
        res.render('rankbycity');
    });






};