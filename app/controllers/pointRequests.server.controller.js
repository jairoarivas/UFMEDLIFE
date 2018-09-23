// Load the module dependencies
const mongoose = require('mongoose');
const PointRequest = mongoose.model('PointRequest');

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

// Create a new controller method that creates new pointRequests
exports.create = function(req, res) {
    // Create a new pointRequest object
    const pointRequest = new PointRequest(req.body);
    pointRequest.pointRequestUser = req.user;
    // Try saving the pointRequest
    pointRequest.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the pointRequest
            res.json(pointRequest);
        }
    });
};

// Create a new controller method that retrieves a list of pointRequests
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of pointRequests
    PointRequest.find().sort('-created').populate('pointRequestUser', 'firstName lastName username').exec((err, pointRequests) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the pointRequest
            res.status(200).json(pointRequests);
        }
    });
};

exports.checkRequest = function(req,res) {
  // console.log(req.params.eventName);
  // console.log(req.params.memberid);
  PointRequest.find({ pointRequestName: [req.params.eventName] , pointRequestUser: [req.params.memberid]}).exec((err, pointRequests) => {
    if(err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.status(200).json(pointRequests);
    }
  });
};

// Create a new controller method that returns an existing pointRequest
exports.read = function(req, res) {
    res.status(200).json(req.pointRequest);
};

// Create a new controller method that updates an existing pointRequest
exports.update = function(req, res) {
    // Get the pointRequest from the 'request' object
    const pointRequest = req.pointRequest;

    // Update the pointRequest fields
    pointRequest.pointRequestName = req.body.pointRequestName;
    pointRequest.pointRequestValue = req.body.pointRequestValue;
    pointRequest.pointRequestDate = req.body.pointRequestDate;
    pointRequest.pointRequestName = req.body.pointRequestName;

    // Try saving the updated pointRequest
    pointRequest.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the pointRequest
            res.status(200).json(pointRequest);
        }
    });
};

// Create a new controller method that delete an existing pointRequest
exports.delete = function(req, res) {
    // Get the pointRequest from the 'request' object
    const pointRequest = req.pointRequest;

    // Use the model 'remove' method to delete the pointRequest
    pointRequest.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the pointRequest
            res.status(200).json(pointRequest);
        }
    });
};

// Create a new controller middleware that retrieves a single existing pointRequest
exports.pointRequestByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single pointRequest
    PointRequest.findById(id).exec((err, pointRequest) => {
        if (err) return next(err);
        if (!pointRequest) return next(new Error('Failed to load pointRequest ' + id));

        // If an pointRequest is found use the 'request' object to pass it to the next middleware
        req.pointRequest = pointRequest;

        // Call the next middleware
        next();
    });
};

exports.pointRequestByCode = function(req,res,next,code){
  PointRequest.findOne({pointRequestCode: [code]}).exec((err, pointRequest) => {
    if(err) return next(err);
    if(!pointRequest) return next(new Error('No pointRequest with pointRequest code ' + code + ' was found'));

    req.pointRequest = pointRequest;

    next();
  });
};

// Create a new controller middleware that is used to authorize an pointRequest operation
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the pointRequest send the appropriate error message
    if (!(req.user.role === 'Admin')) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};
