import { useState } from "react"
import axios from "axios"
import "../../css/adminlogin.css"
import { useNavigate } from "react-router-dom"


function AdminLogin() {

  const navigate=useNavigate()


    const URL="http://localhost:3200/api/admin/adminlogin"
    let [admin, setAdmin] = useState({adminId:"",adminPass:""});
   
  
    const handleAdmin = (e) => {
  
  
      let{name,value}=e.target
      setAdmin((preData)=>{
  
        return{
  
          ...preData,[name]:value 
        }
      }); 
    };
  
  const submitData= async(e)=>{
  
    e.preventDefault()
    console.log(admin);
  try{
  
    const response = await axios.post(URL,admin)
    // console.log(response.data);
    // alert(response.data)

    alert(response.data.message)

    if(response.data.status==="success"){
      localStorage.setItem("TokenKey",response.data.token)//java script builtin object to store data on browser
      navigate("/AdminHome")
    }
    
  }  
  catch(error){
    console.log(error);
    
  }
  
  }
     
    return (
      <>
      
        <h1 className=" adminlogin  " style={{marginTop:"100px",fontSize:"50px"}}>Admin Login </h1>
        <div className="container1 ">
       <form  onSubmit={submitData}>
  
       <div className="adminid">
      <label htmlFor="adminId" >ID</label>
      <div className="inid">
        <input type="text" className="form-control" id="adminId" name="adminId" value={admin.adminId} onChange={handleAdmin} />
      </div>
    </div>
     <div className="pass">
      <label>Password</label>
      <div className="inpass">
        <input type="password" className="form-control" id="adminPass" name="adminPass" value={admin.adminPass} onChange={handleAdmin} />
      </div>
    </div>
  
     <button className=" btn btn-danger w-50" style={{marginLeft:"70px"}}>Login</button> 
       </form>
       </div>
      </>
    );
  }
  export default AdminLogin;