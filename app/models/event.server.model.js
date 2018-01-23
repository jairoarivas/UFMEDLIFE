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
  creator: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
mongoose.model('Event', EventSchema);
