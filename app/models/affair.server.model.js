const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('mongoose-validator');

var affairNameValidator = [
  validate({
    validator: 'matches',
    arguments: /^[a-zA-z0-9-.#]{1,100}$/i,
    message: 'Event name must contain only (and least one) of the following: lowercase, uppercase, 0-9, -, .,  or #.'
  })
];

const AffairSchema = new Schema({
  affairDate:{
      type: Date,
      default: Date.now
  },
  created: {
    type:Date,
    default: Date.now
  },
  affairName: {
    type: String,
    unique:true,
    default: '',
    trim: true,
    required: 'Event must be given a name',
    validate: affairNameValidator
  },
  affairValue: {
    type: Number,
    default: 0
  },
  affairCode: {
    type: String,
    unique: true,
    required: 'Event must be given an event code'
  }
});

mongoose.model('Affair', AffairSchema);
