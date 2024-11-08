import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import HomeIcon from "./HomeIcon"
import Logout from "./Logout"
import "./css/adminhome.css"


function AdminHome() {
    
    const navigate=useNavigate()

    
    useEffect(()=>{
        function checkLogin()
        {
            const authId= localStorage.getItem("TokenKey")
                if(!authId)
               navigate("/Adminlogin")     

        }
        checkLogin()
    },[])
    



    return (
        
        <>
        <h1 className="text-danger bg-dark text-center">Admin DashBoard</h1>
        <div  style={{display:'flex',gap:"1300px",marginTop:"10px",marginBottom:"50px"}}  >
        <div style={{marginLeft:"20px"}}>
             <HomeIcon/>
        </div>
        
        <div >
        <Logout/>
        </div>
        </div>
        <div style={{ display: "flex" }}>
    <div className="cards rounded bg-dark hover-effect" style={{ height: "240px", width: "210px", marginTop: "100px", marginLeft: "300px", boxShadow: "2px 2px 10px black" }}>
        <Link to="/AllContacts" style={{ textDecoration: 'none' }}>
            <img src="contacts.png" alt="" style={{ height: "200px", width: "200px" }} />
            <h2 className="text-center" style={{ color: "darkgrey" }}>All contacts</h2>
        </Link>
    </div>
    <div className="cards rounded bg-dark hover-effect" style={{ height: "240px", width: "210px", marginTop: "100px", marginLeft: "80px", boxShadow: "2px 2px 10px black" }}>
        <Link to="/AllFeedback" style={{ textDecoration: 'none' }}>
            <img src="feedback.png" alt="" style={{ height: "200px", width: "200px" }} />
            <h2 className="text-center" style={{ color: "darkgrey" }}>Feedbacks</h2>
        </Link>
    </div>
    <div className="cards rounded bg-dark hover-effect" style={{ height: "240px", width: "210px", marginTop: "100px", marginLeft: "80px", boxShadow: "2px 2px 10px black" }}>
        <Link to="/addnotice" style={{ textDecoration: 'none' }}>
            <img src="notice.webp" alt="" style={{ height: "200px", width: "200px" }} />
            <h2 className="text-center" style={{ color: "darkgrey" }}>Notice</h2>
        </Link>
    </div>
</div>
        </>
        
        
        
    )
}

export default AdminHome
