import mongoose from "mongoose";

const contSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userQuestion:{type:String,required:true}
   


})

 const ContModel=mongoose.model("contact",contSchema)
 export default ContModel