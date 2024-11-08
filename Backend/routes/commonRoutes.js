
import express, { Router } from "express";
import { addContact, contact,feedback} from "../controller/commonController.js";

const router=express.Router()

router.get("/contact",addContact)

router.post("/addContact",contact)



router.post("/addFeedback",feedback)



export default router
