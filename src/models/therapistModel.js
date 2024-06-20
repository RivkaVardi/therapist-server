const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const therapistSchema = new Schema({
    therapistName: { type: String, required: true },
    specialty: { type: String, required: true },
    location: { type: String, required: false },
    info: { type: String, required: false }
});

module.exports = mongoose.model('Therapist', therapistSchema);
