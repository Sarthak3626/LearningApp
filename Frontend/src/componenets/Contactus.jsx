import axios from "axios"
import { useState } from "react"
function Contactus()
{

    let[userData,setuserData]=useState({userName:"",userEmail:"",userQuestion:""})

       const URL="http://localhost:3200/api/addContact"

    const handleData=(e)=>{
        let{name,value}=e.target
        setuserData((preData)=>{
            
            return{
                ...preData,[name]:value
            }
        })
    }

    const submitdata=async(e)=>
        {
            e.preventDefault()
            // alert("user id is "+userId+" and password is "+userPass)
            console.log(userData);
            // alert("user id is "+userData.userName+"userId and username is "+userData.userEmail+"and userpassword is "+userData.userQuestion)
          try {
            const response=await axios.post(URL,userData)
            console.log(response);
            alert("✔️"+response.data+"🫡")
            setuserData({userName:"",userEmail:"",userQuestion:""})//to clear fields after submit
            
          } catch (error) {
            console.log(error);
            
            
          }
    
        }


    return(
        <>
        <h1 className="text-center text-danger">Contact Us</h1>
        <div className="container rounded w-50" style={{boxShadow:"2px 2px 10px black", backgroundColor:"palevioletred"}}>
            <form onSubmit={submitdata}>
                <div>
                <label htmlFor="Name" className="form-label  mt-3 " style={{marginLeft:"200px"}}>Name</label>
                <input type="text" name="userName"  className="form-control w-50 mt-1 " style={{marginLeft:"200px"}} id="userName" placeholder="enter your Name" value={userData.userName} onChange={handleData}/>
                </div>
                <div>
                <label htmlFor="email" className="form-label  mt-1 "style={{marginLeft:"200px"}}>Email</label>
                <input type="email" name="userEmail" className="form-control w-50 mt-1 " style={{marginLeft:"200px"}} id="uerEmail" placeholder="enter your email" value={userData.userEmail} onChange={handleData} />
                </div>
                <h4 className="mt-3  " style={{marginLeft:"200px"}}>Question</h4>
                <textarea name="userQuestion"  id="userQuestiom" className="form-control w-50  mt-1 " style={{marginLeft:"200px"}} value={userData.userQuestion} onChange={handleData}></textarea>
                <button className="btn btn-success mt-5" style={{marginLeft:"500px"}}>Submit</button>
                <div className="mt-5 " style={{height:"20px"}}>
                    

                </div>
            </form>

        </div>
        </>

    )
}
export default Contactus