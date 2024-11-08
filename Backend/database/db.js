import mongoose from 'mongoose'

const DBURL=`mongodb://localhost:27017/`

const DBNAME=`learning_db`

export const  dbConnect=async()=>{
    try {
         await  mongoose.connect(`${DBURL}/${DBNAME}`)
         console.log("connection established");
         

        
    } catch (error) {
        console.log(error.message);
        
    }

}