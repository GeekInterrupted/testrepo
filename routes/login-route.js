// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/login", passport.authenticate('local'), function(req, res) {
        res.json('/');
    });

    //Render login route
    app.get("/login", (req, res) => {
        res.render("login");
    })



    // Register route
    app.post("/register", function(req, res) {

        db.User.create({
            name: req.body.name,
            email: req.body.emailOrUsername,
            password: req.body.password
        }).then((result) => {
            res.redirect('/')
        }).catch(function(err) {
            res.json(err);
        });
    });

    app.post("/donate", (req, res) => {
        var donation = req.body.donation
        var userId = req.user;
        db.User.update({
            donation: donation
        }, {
            where: {
                id: userId
            }
        }).then((result) => {
            res.json("/")
        })
    })

    //main page route
    app.get("/index-bell", (req, res) => {
        if (req.user) {
            db.User.findOne({
                where: {
                    id: req.user
                },
                raw: true
            }).then((dbUser) => {
                res.render("index-bell", {
                    loginStatus: true,
                    dbUser
                });
            })
        } else {
            res.render("index-bell");
        }
    })

    //Render register route
    app.get("/register", (req, res) => {
        res.render("register");
    })







    //Donation routes 
    app.get("/donation", (req, res) => {
        db.User.findAll({
            raw: true,
            order: ['donation']
        }).then(function(dbDonation) {
            var donationArr = []
            for (var i = 0; i < dbDonation.length; i++) {
                var donationObj = {
                    name: dbDonation[i].name,
                    donation: dbDonation[i].donation
                }
                donationArr.push(donationObj);
            }
            res.json(donationArr);
        })
    })

    //restrict page for only login user
    // app.get("/profile", isAuthenticated, (req, res) => {
    //     db.User.findOne({
    //         where: {
    //             id: req.user
    //         },
    //         raw: true
    //     }).then((dbUser) => {
    //         console.log(dbUser);
    //         res.render("profile", { dbUser });
    //     })
    // })

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });




}