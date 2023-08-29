const mongoose = require('mongoose');

const navbarSchema = new mongoose.Schema({
    menuname:{
        type:String,
    },
    url:{
        type:String,
    },
})

const Navbar= mongoose.model('Navbar',navbarSchema);
module.exports = Navbar;    