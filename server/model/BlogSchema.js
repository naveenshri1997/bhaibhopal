const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    details: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
})

const Blog = mongoose.model('BLOG', BlogSchema);
module.exports = Blog;