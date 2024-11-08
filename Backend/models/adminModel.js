import mongoose from "mongoose";


const adminSchema=new mongoose.Schema({

    adminId:{type:String,required:true,unique:true},
    adminPass:{type:String,required:true},
   


})

 const AdminModel=mongoose.model("Admin",adminSchema)
 export default AdminModel