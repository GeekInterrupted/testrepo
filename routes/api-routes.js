// =============================================================
// Requiring our models
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


    //get AQI data for counties in TX 2016 
    app.get("/aqi16", function(req, res) {
        db.Annual16.findAll({}).then(function(dbAnnual16) {
            res.json(dbAnnual16);
        });
    });

    //get ranks for counties in TX 
    app.get("/ranks", function(req, res) {
        db.Rank.findAll({}).then(function(dbRank) {
            res.json(dbRank);
        });
    });


};