const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema({
  date: { type: Date, required: true },
  therapist: { type: String, required: true }
});

module.exports = mongoose.model('Time', timeSchema);
