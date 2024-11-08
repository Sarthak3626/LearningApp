import { useEffect, useState } from "react"
import axios from "axios"
 import { Link, useNavigate } from "react-router-dom"
import Logout from "./Logout"
import HomeIcon from "./HomeIcon"
import "./css/allnotice.css"


 
import AllNoticesDetails from "./AllNoticesDetails"

function Allnotice() {
    
    const URL ="http://localhost:3200/api/admin/viewNotices"

    let [notice,setNotice]=useState([])
const navigate=useNavigate()
useEffect(()=>{

    async function fetchData(){

        const authId= localStorage.getItem("TokenKey")
        
        if(!authId){
        
          navigate("/adminLogin")
        }
        else{
try {
    const response= await axios.get(URL)
    console.log(response);
    setNotice(response.data)
 
    
} catch (error) {
    console.log(error);
    
}

        }
    
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


<Link to="/AddNotice"><button className=" notice-btn text-dark ">Add Notice</button></Link>
   
   <h2 className="alln">All notices</h2>





    
        
       <AllNoticesDetails noticeArray={notice}/>
        
        </>
    )
}

export default Allnotice