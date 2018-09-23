// Load the module dependencies
const mongoose = require('mongoose');
const Affair = mongoose.model('Affair');

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

// Create a new controller method that creates new affairs
exports.create = function(req, res) {
    // Create a new affair object
    const affair = new Affair(req.body);

    // Try saving the affair
    affair.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the affair
            res.json(affair);
        }
    });
};

// Create a new controller method that retrieves a list of affairs
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of affairs
    Affair.find().sort('-created').exec((err, affairs) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the affair
            res.status(200).json(affairs);
        }
    });
};

// Create a new controller method that returns an existing affair
exports.read = function(req, res) {
    res.status(200).json(req.affair);
};

// Create a new controller method that updates an existing affair
exports.update = function(req, res) {
    // Get the affair from the 'request' object
    const affair = req.affair;

    // Update the affair fields
    affair.affairName = req.body.affairName;
    affair.affairValue = req.body.affairValue;
    affair.affairDate = req.body.affairDate;
    affair.affairCode = req.body.affairCode;

    // Try saving the updated affair
    affair.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the affair
            res.status(200).json(affair);
        }
    });
};

// Create a new controller method that delete an existing affair
exports.delete = function(req, res) {
    // Get the affair from the 'request' object
    const affair = req.affair;

    // Use the model 'remove' method to delete the affair
    affair.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the affair
            res.status(200).json(affair);
        }
    });
};

// Create a new controller middleware that retrieves a single existing affair
exports.affairByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single affair
    Affair.findById(id).exec((err, affair) => {
        if (err) return next(err);
        if (!affair) return next(new Error('Failed to load event ' + id));

        // If an affair is found use the 'request' object to pass it to the next middleware
        req.affair = affair;

        // Call the next middleware
        next();
    });
};

exports.affairByCode = function(req,res,next,code){
  Affair.findOne({affairCode: [code]}).exec((err, affair) => {
    if(err) return next(err);
    if(!affair) return next(new Error('No event with event code ' + code + ' was found'));

    req.affair = affair;

    next();
  });
};

// Create a new controller middleware that is used to authorize an affair operation
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the affair send the appropriate error message
    if (!(req.user.role === 'Admin')) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};
