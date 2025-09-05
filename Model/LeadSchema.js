const mongoose=require("mongoose");
const LeadSchema=mongoose.Schema({
   name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    PhoneNO:{
        type:String,
        required:true,

    },
    Message:{
        type:String,
        required:true
    },
    Interest:{
        type:String,
        required:true
    },
    Source:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true,
        enum:["new","lost","converted","contacted"]
    }
},
{
    timeStamps:true
}
);
const leadModel=mongoose.model("LeadSchema",LeadSchema);
module.exports=leadModel;