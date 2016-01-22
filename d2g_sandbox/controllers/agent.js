// database model
var mongoose = require('mongoose');
var schema = require('../model/user.js');
var User = schema.User;


// database connection
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/mongoose');*/

module.exports.controller = function (app) {

        app.post('/success', function (req, res) {
            //console.log(req.body);

            var fname = req.body.fname;
            var lname = req.body.lname;
            var full_name = fname.concat(lname);
            var email = req.body.email;
            var password = req.body.password;
            var pnumber = req.body.pnumber;
            var street = req.body.street;
            var city = req.body.city;
            var country = req.body.country;
            var bio = req.body.bio;
            var birth = req.body.birth;
            var service = req.body.service;
            var detail = req.body.detail;
            var gender = req.body.gender;

            User.findOne({
                'email': email
            }, function (err, user) {
                if (err) {
                    console.log("inside error");
                    return;
                }

                if (user) {
                    console.log("email exists");
                    res.send({
                        message: 'email exists'
                    });
                    return;

                } else {
                    // if there is no user with that email create user
                    console.log("inside new user");

            var newUser = new User();

            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.name = full_name;
            newUser.phone = pnumber;
            newUser.city = city;
            newUser.street = street;
            newUser.country = country;
            newUser.bio = bio;
            newUser.birth = birth;
            newUser.service = service;
            newUser.detail = detail;
            newUser.gender = gender;

            // save the user
            console.log(newUser);
            newUser.save(function (err) {
                if (err)
                    throw err;
                else {
                    console.log('Inserted Details');
                    /*res.send( {user : newUser.email});*/
                    res.send({
                        message: 'Congratualations!! You have successfully registered'
                    });


                }

            });
                }
            });
        });

        app.get('/', function (req, res) {
            res.render('index.html');
        });

        app.get('/signup', function (req, res) {
            res.render('index.html');
        });

        app.get('/register', function (req, res) {
            res.render('reg.html');
        });


        app.get('/profile', function (req, res) {
            res.render('profile.html', {
                user: req.session.user,
                fullname: req.session.user_name,
                phone: req.session.user_phone,
                city: req.session.user_city,
                street: req.session.user_street,
                country: req.session.user_country,
                birth: req.session.user_birth,
                bio: req.session.user_bio,
                service: req.session.user_service,
                detail: req.session.user_detail,
                gender: req.session.user_gender

            });
        });


        app.get('/search_agent', function (req, res) {
            var search_input = req.query.search_string;
            console.log(search_input);
              //User.find({name: {$regex: new RegExp("^" + search_input, "i")}},
            
           User.find({
                $or: [
                    {
                        name: {
                            $regex: new RegExp("^" + search_input, "i")
                        }
                    },
                    {
                        service: {
                            $regex: new RegExp("^" + search_input, "i")
                        }
                    },
                     {
                        bio: {
                            $regex: new RegExp("^" + search_input, "i")
                        }
                    }
                    
                     

          ]
            }, function (err, user) {

                if (err) {
                    //console.log("user not there");
                    res.send({
                        error: err
                    });
                } else {
                    if (user.length == 0) {
                        res.send({
                            error: "No user found."
                        });

                    } else {
                        console.log(user);
                        res.send(user);
                    }
                }


            });
        });
};