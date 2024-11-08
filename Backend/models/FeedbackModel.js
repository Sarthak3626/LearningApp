import mongoose from "mongoose";

const FeedbackSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userRating:{type:String,required:true}, 
    userRemark:{type:String,required:true}
   


})

 const FeedbackModel=mongoose.model("Feedback",FeedbackSchema)
 export default FeedbackModel