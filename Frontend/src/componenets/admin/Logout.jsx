
import { useNavigate } from "react-router-dom"

function Logout() {
    const navigate=useNavigate()
    // const auth_id=localStorage.getItem("TokenKey")

    const adminLogout=()=>{
       
        if(window.confirm("do you want to logout"))
        {
            localStorage.removeItem("TokenKey")
            navigate("/AdminLogin")
        }
    }
    return (
        <>
        <div>
            <button className='btn btn-danger' onClick={adminLogout}>Logout</button>
        </div>
        </>
        
    )
}

export default Logout
