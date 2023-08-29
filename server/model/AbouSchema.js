const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    ordering:{
        type:Number
    },
    subtitle: {
        type: String,
    },
    details: {
        type: String,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    }
})
const About = mongoose.model('ABOUT', AboutSchema);
module.exports = About;