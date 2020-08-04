const mongoose = require('mongoose');

const { Schema } = mongoose;
const schema = new Schema({
  comments: String,
  description: String,
  latitude: {
    max: 90,
    min: -90,
    required: true,
    type: Number,
  },
  longitude: {
    max: 180,
    min: -180,
    required: true,
    type: Number,
  },
  image: String,
  rating: {
    default: 0,
    max: 10,
    min: 0,
    type: Number,
  },
  title: {
    required: true,
    type: String,
  },
  visit_date: {
    required: true,
    type: Date,
  },
}, {
  timestamps: true,
});
const LogEntry = mongoose.model('LogEntry', schema);

module.exports = LogEntry;
