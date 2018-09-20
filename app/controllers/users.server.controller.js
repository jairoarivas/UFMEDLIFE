// Load the module dependencies
const User = require('mongoose').model('User');
const passport = require('passport');
const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const flash = require('express-flash');

// Create a new error handling controller method
const getErrorMessage = function(err) {
	// Define the error message variable
	let message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Email already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong!';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (const errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	// Return the message error
	return message;
};

exports.forgotPassword = function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          return res.status(400).send({message: 'No user with that email.'});
          //return res.redirect('/api/forgotPassword');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'medlifeufl@gmail.com',
          pass: 'gogators2016'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'medlifeufl@gmail.com',
        subject: 'UF MEDLIFE Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/authentication/resetPassword/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
				req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err){
			return res.status(400).send(err);
		}
    res.status(200).send({message: 'Password reset email sent succesfully'});
  });
};

// Create a new controller method that signin users
exports.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            // Use the Passport 'login' method to login
            req.login(user, (err) => {
                if (err) {
										console.log(err);
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};

// Create a new controller method that creates new 'regular' users
exports.signup = function(req, res) {
	const user = new User(req.body);
	user.provider = 'local';
	user.password = req.body.password;
	if (user.password) {
		user.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		user.password = user.hashPassword(user.password);
	}

	//saving and logging in
	user.save((err) => {
		if(err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			user.password = undefined;
			user.salt = undefined;

			req.login(user,function(err){
				if(err){
					res.status(400).send(err);
				}
				else{
					res.json(user);
				}
			});
		}
	});
};
// Create a new controller method for signing out
exports.signout = function(req, res) {
	// Use the Passport 'logout' method to logout
	req.logout();

	// Redirect the user back to the main application page
	res.redirect('/');
};

// Create a new controller middleware that is used to authorize authenticated operations
exports.requiresLogin = function(req, res, next) {
	// If a user is not authenticated send the appropriate error message
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	}

	// Call the next middleware
	next();
};

// exports.userLoggedIn = function(req,res,next){
// 	if(req.isAuthenticated()){
// 		res.json(req.user);
// 	}
// 	else{
// 		return res.status(401).send({
// 			messsage: 'No user is logged in.'
// 		});
// 	}
// 	next();
// }

exports.list = function(req, res){
	User.find().exec((err, users) => {
		if(err){
			return res.status(400).send({
				message:getErrorMessage(err)
			});
		} else {
			res.json(users);
		}
	});
};

exports.read = function(req,res){
	res.json(req.user);
};

exports.resetPassword = function(req, res){
	res.json(req.user);
};

exports.userByToken = function(req, res, next) {
	User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }).exec((err, user) => {
		if(err) return next(err);
		if(!user) return next(new Error('Failed to load user with that token'));

		req.user = user;

		next();
	});
};

exports.reset = function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.status(400).send({message: 'Token invalid or expired'});
        }

        user.password = req.body.password;
				if (user.password) {
					user.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
					user.password = user.hashPassword(user.password);
				}
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
          req.login(user, function(err) {
						done(err, user);
          });
        });
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'medlifeufl@gmail.com',
          pass: 'gogators2016'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'medlifeufl@gmail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.username + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
		if (err){
			return res.status(400).send(err);
		}
		res.status(200).send({message: 'Password reset succesfully'});
  });
}

exports.userByID = function(req, res,next ,id){
	User.findById(id).exec((err, user) => {
		if(err) return next(err);
		if(!user) return next(new Error('Failed to load user' + id));

		req.user = user;

		next();
	});
};


exports.removePoint = function(req, res){
	const user= req.user;
	user.tempEvent = req.body.tempEvent;

	var index = user.attendedEvents.indexOf(user.tempEvent);
	if(index > -1){
		user.attendedEvents.splice(index,1);
	}

	user.save((err) => {
		if(err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(user);
		}
	});

};

exports.addPoint = function(req, res){
	const user= req.user;
	user.tempEvent = req.body.tempEvent;
	user.attendedEvents.push(user.tempEvent);

	user.save((err) => {
		if(err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(user);
		}
	});

};

exports.update = function(req, res){
	const user = req.user;
	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.email = req.body.email;
	//user.username = req.body.username;
	//user.password = req.body.password;
	user.role = req.body.role;

	user.save((err) => {
		if(err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(user);
		}
	});

};

exports.delete = function(req, res){
	const user = req.user;

	user.remove((err) => {
		if(err) {
			return res.status(400).send({
				messsage: getErrorMessage(err)
			});
		} else {
			res.json(user);
		}
	});

};

exports.userByID = function(req, res,next ,id){
	User.findById(id).exec((err, user) => {
		if(err) return next(err);
		if(!user) return next(new Error('Failed to load user' + id));

		req.user = user;

		next();
	});
};

exports.hasAuthorization = function(req, res,next){
	if(req.user.role !== 'Admin'){
		return res.status(403).send({
			message: 'User is not authorized.'
		});
	}

	next();
};
