const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventDate:{
      type: Date,
      default: Date.now
  },
  created: {
    type:Date,
    default: Date.now
  },
  eventName: {
    type: String,
    default: '',
    trim: true,
    required: 'Event must be given a name'
  },
  eventValue: {
    type: Number,
    default: 0
  },
  eventCode: {
    type: String,
    required: 'Event must be given an event code'
  }
});
mongoose.model('Event', EventSchema);
