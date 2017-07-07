var passport = require("../config/passport");
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // Gets index page
    app.get('/', function(req, res) {
        
        // this req.user will have only id matches with database
        console.log(req.user);

        // if user is logged in then send to the main page 
        // with user infomation
        if (req.user) {
            db.User.findOne({
                where: {
                    id: req.user
                },
                raw: true
            }).then((dbUser) => {
                // send data to handlebars and render
                res.render("index", {
                    loginStatus: true,
                    dbUser
                });
            })
        } else {
            //if user is not logged in then don't send any users infomation
            res.render("index");
        }
    });

    //handle login route
    app.get('/login', function(req, res) {
        res.render('login');
    });

    //handle register route
    app.get('/register', function(req, res) {
        res.render('register');
    });


    app.get('/rankbycity', function(req, res) {
        res.render('rankbycity');
    });

    //handle logout route
     app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // handle login route
    app.post("/login", passport.authenticate('local'), function(req, res) {
        res.json('/');
    });

  // handle register route and register user to database
    app.post("/register", function(req, res) {

        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then((result)=> {
            console.log(result);
            // send user back to login page
            res.json('/login')
        }).catch(function(err) {
            //if err throw err to user
            res.json(err);
        });
    });
    
    // handle data from donate route
    app.post("/donate", (req, res)=>{
        // grab the amount of donation
        var donation = req.body.donation
        
        // grab the user id that matches with users table
        var userId = req.user;

            // create data with sequelize
            db.Donation.create({
                donation: donation,
                userId: userId
            }).then((result)=>{
                //redirect user to the main page from the client side
                res.json("/")
            });
    });

    // handle donation route by sending JSON to this route
    app.get("/donation", (req, res)=>{
        db.Donation.findAll({
                raw: true,
                order: ['donation']
            }).then(function(dbDonation) {
                // create an array
            var donationArr =[]

                // interate all data
            for(var i = 0; i < dbDonation.length; i++){

                // create an obj
                var donationObj = {
                userid : dbDonation[i].userId,
                donation: dbDonation[i].donation
            }
                //push each object into array
                donationArr.push(donationObj);
            }
            // send respose in JSON format
            res.json(donationArr);
            })
    })

 //Twitter login routes
  app.get('/auth/twitter',
  passport.authenticate('twitter'));
  
  app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/twittererror' }),
    function(req, res) {

    // Successful authentication, redirect home.
    res.redirect('/');
  });


   //facebook login routes
  app.get('/auth/facebook',
    passport.authenticate('facebook', { scope: ['email']}));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/facebookerror' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
};