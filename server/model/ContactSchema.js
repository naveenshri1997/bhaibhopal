const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    contact_no: {
        type: String,
    },
    email: {
        type: String,
    },
    details: {
        type: String,
    },
})

const Contact = mongoose.model('CONTACT', ContactSchema)
module.exports = Contact;