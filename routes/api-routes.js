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

    app.get("/dons", function(req, res) {
        db.Donation.findAll({}).then(function(dbDonation) {
            res.json(dbDonation);
        });

    });

    app.get("/totalDonations", function(req, res) {
        db.Donation.sum("donation").then(function(dbDonation) {
            res.json(dbDonation);
            console.log("running total: " + dbDonation);
        });
    });
};