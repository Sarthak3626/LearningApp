import express from 'express'
import router from './routes/commonRoutes.js'
import cors from 'cors'
import adminRouter from './routes/adminRoutes.js'
import { dbConnect } from './database/db.js'
const serverApp=express()

const PORT=3200

serverApp.use(express.json()) // to receive the data in json format
serverApp.use(express.urlencoded())// to receive form data

serverApp.use(cors())//for cross origin resource sharing
dbConnect()//calling database connection function

serverApp.use("/api",router)
serverApp.use("/api/admin",adminRouter)

serverApp.listen(PORT,()=>{

   console.log(`server is listening on http://localhost:${PORT}`)

})