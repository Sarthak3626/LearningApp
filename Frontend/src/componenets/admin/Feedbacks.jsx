import { useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import HomeIcon from './HomeIcon'
import Logout from './Logout'
import axios from "axios"
import FeedbackDetails from "./FeedbackDetails"


function AllFeedback() {

    const URL="http://localhost:3200/api/admin/allFeedbacks"

    const [FeedbackData,setFeedbackData]=useState([])
    let [status,setStatus]=useState(true)
 

    
    const navigate=useNavigate()

    
    useEffect(()=>{
        async function fetchData()
        {
            const authId= localStorage.getItem("TokenKey")
            if(!authId)
           navigate("/AdminLogin") 
        else{

            

         try {
           const response= await axios.get(URL)
           console.log(response)
           console.log(response.data);
           setFeedbackData(response.data)
        
           if(response.data.length!=0)
                setStatus(true)
            

            
         } 
         catch (error) {
            console.log(error);
            
            
         }}
           
        }
        fetchData()
    },[])


    return (
        <>
           <h1 className="text-danger bg-dark text-center">Admin DashBoard</h1>
        <div style={{display:'flex',gap:"1300px",marginTop:"10px",marginBottom:"50px"}}>
         <div style={{marginLeft:"20px"}}>
             <HomeIcon/>
        </div>
        <div>
            <Logout/>
        </div>
        </div>
       
        <h1 className='text-center'>Feedbacks</h1>
        { status ?<FeedbackDetails FeedbackArray={FeedbackData}/>: <h1 className="text-center mt-5">No Feedback Avialable</h1> }
        </>
        
    )
}

export default AllFeedback