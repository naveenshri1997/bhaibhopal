const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    name: {
        type: String
    },
    venue: {
        type: String
    },
    time: {
        type: String
    },
    day: {
        type: String
    },
    contact: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
})

const Meeting = mongoose.model('MEETING', MeetingSchema);
module.exports = Meeting;