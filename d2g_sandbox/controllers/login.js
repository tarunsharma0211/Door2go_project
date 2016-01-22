//var flash    = require('connect-flash');
var mongoose = require('mongoose')
var schema = require('../model/user.js');
var User = schema.User;
module.exports.controller = function(app) {

		app.post('/login', function(req, res) {

			var email = req.body.email;

			var password = req.body.password;
			//console.log(email);

			User.findOne({ 'email' :  email }, function(err, user) {
			console.log("Inside find function");
			// if there are any errors, return the error before anything else
				//console.log(JSON.stringify(user));
			if(err)	{
				//console.log(err);
				return (err);
			}
			// if no user is found, return the message
			if (!user)
			{
				console.log("no user found");
                
			/*res.render('login.html',{ message : 'No user found' });*/


			}else if (!user.validPassword(password)){   

                console.log("Wrong password");
            /*res.render('login.html',{ message : 'Wrong password' });*/
            }else {
                 req.session.user = email;
                 req.session.user_id = user._id;
                 req.session.user_name = user.name;
                 req.session.user_phone = user.phone;
                 req.session.user_city = user.city;
                 req.session.user_street = user.street;
                 req.session.user_country = user.country;
                 req.session.user_birth = user.birth;
                 req.session.user_bio = user.bio;
                 req.session.user_service = user.service;
                 req.session.user_detail=user.detail;
                 req.session.user_gender=user.gender;
                 res.redirect('/profile');

            }


        });
            
       
    });
    
    app.get('/logout', function(req, res) {
        req.session=null;
        res.redirect('/signup');
      
    });
    
 };
