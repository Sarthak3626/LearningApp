import express from "express";
import { addNotice, adminLogin,allContacts, allFeedbacks,modifyContact,removeContact, showContact, viewNotice } from "../controller/adminController.js";


const adminRouter=express.Router()

adminRouter.post("/adminLogin",adminLogin)
adminRouter.get("/allContacts",allContacts)
adminRouter.get("/allFeedbacks",allFeedbacks)
adminRouter.delete("/removeContact/:contactId",removeContact)

adminRouter.post("/addNotice",addNotice)
adminRouter.get("/viewNotices",viewNotice)
adminRouter.get("/loadContact/:id",showContact)
adminRouter.put("/updateContact/:id",modifyContact)
export  default adminRouter