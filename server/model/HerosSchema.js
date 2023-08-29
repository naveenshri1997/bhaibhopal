const mongoose = require('mongoose');

const HerosSchema = new mongoose.Schema({
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
const Hero = mongoose.model('HERO', HerosSchema);
module.exports = Hero;