const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    required: 'Event must be given a name'
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
