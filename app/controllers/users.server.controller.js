// Load the module dependencies
const User = require('mongoose').model('User');
const passport = require('passport');

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
				message = 'Username already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
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

	// Try saving the User
	user.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Remove sensitive data before login
			user.password = undefined;
			user.salt = undefined;

			// Login the user
			req.login(user, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
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

exports.update = function(req, res){
	const user = req.user;
	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.email = req.body.email;
	user.username = req.body.username;
	user.password = req.body.password;
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
			message: 'User is not authorized'
		});
	}

	next();
};
