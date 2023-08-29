const mongoose= require("mongoose");

const basicDetailSchema = new mongoose.Schema({
    name:{
        type:String,        
    },
    age:{
        type:Number,
    }
})

const BasicDetail= mongoose.model('BASICDETAIL',basicDetailSchema)

module.exports = BasicDetail;