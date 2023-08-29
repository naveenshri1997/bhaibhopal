const mongoose = require('mongoose');
const TemplateSchema = new mongoose.Schema({
    title: {
        type: String,
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
const Template = mongoose.model('TEMPLATE', TemplateSchema)
module.exports = Template;