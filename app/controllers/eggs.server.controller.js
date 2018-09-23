// Load the module dependencies
const mongoose = require('mongoose');
const Egg = mongoose.model('Egg');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new eggs
exports.create = function(req, res) {
    // Create a new egg object
    const egg = new Egg(req.body);

    // Try saving the egg
    egg.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the egg
            res.json(egg);
        }
    });
};

// Create a new controller method that retrieves a list of eggs
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of eggs
    Egg.find().sort('-created').exec((err, eggs) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the egg
            res.status(200).json(eggs);
        }
    });
};

// Create a new controller method that returns an existing egg
exports.read = function(req, res) {
    res.status(200).json(req.egg);
};

// Create a new controller method that updates an existing egg
exports.update = function(req, res) {
    // Get the egg from the 'request' object
    const egg = req.egg;

    // Update the egg fields
    egg.eggName = req.body.eggName;
    egg.eggValue = req.body.eggValue;
    egg.eggDate = req.body.eggDate;
    egg.eggCode = req.body.eggCode;

    // Try saving the updated egg
    egg.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the egg
            res.status(200).json(egg);
        }
    });
};

// Create a new controller method that delete an existing egg
exports.delete = function(req, res) {
    // Get the egg from the 'request' object
    const egg = req.egg;

    // Use the model 'remove' method to delete the egg
    egg.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the egg
            res.status(200).json(egg);
        }
    });
};

// Create a new controller middleware that retrieves a single existing egg
exports.eggByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single egg
    Egg.findById(id).exec((err, egg) => {
        if (err) return next(err);
        if (!egg) return next(new Error('Failed to load egg ' + id));

        // If an egg is found use the 'request' object to pass it to the next middleware
        req.egg = egg;

        // Call the next middleware
        next();
    });
};

exports.eggByCode = function(req,res,next,code){
  Egg.findOne({eggCode: [code]}).exec((err, egg) => {
    if(err) return next(err);
    if(!egg) return next(new Error('No egg with egg code ' + code + ' was found'));

    req.egg = egg;

    next();
  });
};

// Create a new controller middleware that is used to authorize an egg operation
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the egg send the appropriate error message
    if (!(req.user.role === 'Admin')) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};
