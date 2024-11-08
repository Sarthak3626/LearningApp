import mongoose from 'mongoose'
import ContModel from '../models/ContModel.js'
import FeedbackModel from '../models/FeedbackModel.js'


export function addContact(req,res)
{
    res.send("<h1>Contact added </h1>")
}

export const contact=async(req,res)=>{
  
    try {

    const userData=req.body
    console.log(userData);

    const{userName,userEmail,userQuestion}=userData
     
    const contDoc=new ContModel({
        
        userName:userName,
        userEmail:userEmail,
        userQuestion:userQuestion


       })//creation of one document for registration collection

       await contDoc.save()//for to save document into database collection
   

    res.send("contact added  successfully")

   
        
    } 
    catch (error) {
        console.log(error);
        
        
    }
    
}

export const feedback=async(req,res)=>{

    try{

    const feedbackData= req.body
    console.log(feedbackData);

    const{userName,userEmail,userRating,userRemark}=feedbackData

    const FeedbackDoc=new FeedbackModel({
        
        userName:userName,
        userEmail:userEmail,
        userRating:userRating,
        userRemark:userRemark


       })//creation of one document for registration collection

       await FeedbackDoc.save()//for to save document into database collection
    
    res.send("feedback added successfully")

  
    } catch (error) {
        console.log(error);
        
        
    }
    
}


