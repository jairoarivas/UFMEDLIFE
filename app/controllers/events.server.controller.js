// Load the module dependencies
const mongoose = require('mongoose');
const Event = mongoose.model('Event');

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

// Create a new controller method that creates new events
exports.create = function(req, res) {
    // Create a new event object
    const event = new Event(req.body);

    // Set the event's 'creator' property
    event.creator = req.user;

    // Try saving the event
    event.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the event
            res.json(event);
        }
    });
};

// Create a new controller method that retrieves a list of events
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of events
    Event.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, events) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the event
            res.json(events);
        }
    });
};

// Create a new controller method that returns an existing event
exports.read = function(req, res) {
    res.json(req.event);
};

// Create a new controller method that updates an existing event
exports.update = function(req, res) {
    // Get the event from the 'request' object
    const event = req.event;

    // Update the event fields
    event.eventName = req.body.eventName;


    // Try saving the updated event
    event.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the event
            res.json(event);
        }
    });
};

// Create a new controller method that delete an existing event
exports.delete = function(req, res) {
    // Get the event from the 'request' object
    const event = req.event;

    // Use the model 'remove' method to delete the event
    event.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the event
            res.json(event);
        }
    });
};

// Create a new controller middleware that retrieves a single existing event
exports.eventByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single event
    Event.findById(id).populate('creator', 'firstName lastName fullName').exec((err, event) => {
        if (err) return next(err);
        if (!event) return next(new Error('Failed to load event ' + id));

        // If an event is found use the 'request' object to pass it to the next middleware
        req.event = event;

        // Call the next middleware
        next();
    });
};

// Create a new controller middleware that is used to authorize an event operation
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the event send the appropriate error message
    if (req.event.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};
