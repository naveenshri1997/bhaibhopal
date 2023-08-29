const mongoose = require('mongoose');

const SliderSchema =new mongoose.Schema({
    title: {
        type: String
    },
    ordering: {
        type: Number
    },
    image: {
        type: String
    },
    category:{
        type:String,
    }
})

const Slider = mongoose.model('SLIDER', SliderSchema);

module.exports = Slider;