const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    imagecategory:{
        type:String
    },    
    image: {
        type: String
    }
})
const Gallery = mongoose.model('GALLERY', GallerySchema)

module.exports =Gallery;