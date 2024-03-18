const mongoose = require("mongoose");

const studentSchema= new mongoose.Schema({

    roll:Number,
    name:String,
    city:String,
    fees:Number
});


module.exports=mongoose.model("student", studentSchema);