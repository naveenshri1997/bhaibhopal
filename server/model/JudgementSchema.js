const mongoose = require("mongoose");

const JudgementSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    details:{
        type: String,
    },
    image:{
        type:String,
    },
    category:{
        type:String,
    }
})
const Judgement = mongoose.model("JUDGEMENT", JudgementSchema)

module.exports = Judgement;