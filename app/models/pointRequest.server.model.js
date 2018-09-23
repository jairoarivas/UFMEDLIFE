const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointRequestSchema = new Schema({
  pointRequestDate:{
    type: Date
  },
  created: {
    type:Date,
    default: Date.now
  },
  pointRequestName: {
    type: String
  },
  pointRequestValue: {
    type: Number
  },
  pointRequestUser: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
mongoose.model('PointRequest', PointRequestSchema);
