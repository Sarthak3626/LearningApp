import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import Logout from "./Logout";
import HomeIcon from "./HomeIcon";
import "./css/addnotice.css"
import Swal from 'sweetalert2';



function AddNotice() {
  const [notice, setNotice] = useState("");
  const navigate=useNavigate()
  const URL = "http://localhost:3200/api/admin/addNotice";



 useEffect(()=>{

async function checkLogin() {
    const authId = localStorage.getItem("TokenKey")

    if(!authId){

        navigate("/adminLogin")
     }
}
checkLogin()

 },[])

const submitNotice= async(e)=>{

    e.preventDefault()

try {
    const response= await axios.post(URL, {content:notice})
    console.log(response.data);
    Swal.fire({
        title: 'Response',
        text: response.data,
        icon: 'success', // You can change this to 'error', 'warning', etc. based on your needs
        confirmButtonText: 'OK'
    })
    setNotice("")
    
} catch (error) {
    console.error('Error:', error);
    Swal.fire({
        title: 'Error',
        text: error.response ? error.response.data : 'An unexpected error occurred.',
        icon: 'error',
        confirmButtonText: 'OK'
    });
    
}
}





  const handleNoticeChange = (e) => {
    setNotice(e.target.value); // Directly update the notice value
  };

  
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




<Link to="/viewNotices"><button className=" notice-btn text-dark ">View All Notices</button></Link>

      <div className="notice-container">
              <div className="notice-form-container">
                  <h2 className="  notice-title">Add Notice</h2>
                  <form onSubmit={submitNotice} className="notice-form">
                      <textarea
                          className="notice-textarea"
                          placeholder="Write your notice here..."
                          value={notice}
                          id="notice"
                          name="notice"
                          onChange={handleNoticeChange}
                          required
                      ></textarea>
                      <div>
                      <button type="submit" className="notice-submit-btn">Submit</button>
                      </div>
                     
                  </form>
              </div>
          </div></>
  );
}

export default AddNotice;