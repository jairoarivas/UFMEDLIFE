const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
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
  description: {
    type: String,
    default: '',
    trim: true
  }
});
mongoose.model('Event', EventSchema);
