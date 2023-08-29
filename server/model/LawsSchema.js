const mongoose = require("mongoose");

const LawSchema = new mongoose.Schema({
    law_title: {
        type: String,
    },
    law_Subtitle: {
        type: String,
    },
    law_details: {
        type: String,
    },
    category:{
        type:String
    }
})

const law = mongoose.model('LAW', LawSchema);
module.exports = law;
