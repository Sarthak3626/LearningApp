
import AdminModel from "../models/adminModel.js";
import mongoose from "mongoose";
import ContModel from "../models/ContModel.js"; 
import FeedbackModel from "../models/FeedbackModel.js" // Ensure correct path
import { Notice } from "../models/NoticeModel.js";


export async function modifyContact(req,res)
{

  try{
  let cId=req.params.id
  console.log("id is"+cId)
  let ContactObj=req.body
    let{userName,userEmail,userQuestion}=ContactObj
   const status=await ContModel.findByIdAndUpdate({_id:cId},{userName,userEmail,userQuestion})
   console.log(status);
   res.send("contact updated successfully")
   
 
   
  }
  catch(err){
    console.log(err);
    
    
  }
}


export async function showContact(req,res) {

  let cId=req.params.id
  console.log("id is "+cId);


  try {
  const ContactObj =  await ContModel.findById({_id:cId})
  console.log(ContactObj);
  

  res.send(ContactObj)
    
  } catch (error) {
    console.log(error);
    
    
  }
  
  
}


export const addNotice = async (req, res) => {
  try {
    // Extract notice content from request body
    const { content } = req.body;

    console.log("Request body:", req.body);

    const newNotice = new Notice({ content });
    await newNotice.save();

    res.send("Notice Updated  successfully")
  } catch (error) {
    console.error(error);
    res.send({ message: "Error submitting notice" });
  }
};

export const viewNotice= async(req,res)=>{

try {
const allNotices= await Notice.find()
console.log(allNotices);

res.send(allNotices)
} catch (error) {
console.log(error);

}


}





export async function removeContact(req,res){
   let cID = req.params.contactId//fetching value from route parameter
   console.log(`contact Id is ${cID}`);

   try {
     let  delete_status= await ContModel.deleteOne({_id:cID})
     res.send(delete_status)
    
   } catch (error) {
    console.log(error);
    
    
   }
   
}



export const allContacts = async (req, res) => {
  try {
    const contacts = await ContModel.find();  // No need to redeclare ContModel
    console.log(contacts);
    res.send(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error fetching contacts" });
  }
};

export const allFeedbacks = async (req, res) => {
    try {
      const feedbacks = await FeedbackModel.find();  // No need to redeclare ContModel
      console.log(feedbacks);
      res.send(feedbacks);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Error fetching feedback" });
    }
  };

export function viewContact(req,res){
    res.send("<h1>All contact are seen here</h1>")
}


export const adminLogin=async(req,res)=>{

    // res.send("send by server for admin")
    try {
        

            const{adminId,adminPass}=req.body
            console.log(adminId+adminPass);
            const adminObject =await AdminModel.findOne({adminId:adminId})
            if(adminObject!=null)
            {
                if(adminObject.adminPass==adminPass)
                {
                    //res.send("Hello Admin")
                    res.send({message:"Hello Admin",token:adminObject.adminId,status:"success"})
    
                    //we are sending object with token in response
                }
                else{
                    res.send({message:"Incorrect Password"})
                }
            }
            else{
                res.send({message:"Id does Not exist"})
            }
    
    
    
        
    
   } catch (error) 
   {
     console.log(error);
     
   }
     

}