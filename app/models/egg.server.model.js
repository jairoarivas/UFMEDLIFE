const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EggSchema = new Schema({
  eggDate:{
      type: Date,
      default: Date.now
  },
  created: {
    type:Date,
    default: Date.now
  },
  eggName: {
    type: String,
    unique:true,
    default: '',
    trim: true,
    required: 'Egg must be given a name'
  },
  eggValue: {
    type: Number,
    default: 0
  },
  eggCode: {
    type: String,
    unique: true,
    required: 'Egg must be given an egg code'
  }
});
mongoose.model('Egg', EggSchema);
