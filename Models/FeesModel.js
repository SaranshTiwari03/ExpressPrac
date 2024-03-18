const mongoose= require("mongoose");

const feesSchema= mongoose.Schema({

    rollno:Number,
    Submitfees:Number,
    remFees:Number
});


module.exports=mongoose.model("stufees",feesSchema);
