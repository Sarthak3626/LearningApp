import { useState } from "react"
import axios from "axios"
import Header from "./Header"
import"../css/feedback.css"
function Feedback() {

    let[feedbackData,setfeedbackData]=useState({userName:"",userEmail:"", userRating:"" ,userRemark:""})

     const URL="http://localhost:3200/api/addFeedback"

     const handleData=(e)=>{
        let{name,value}=e.target
        setfeedbackData((preData)=>{
           
            return{
                ...preData,[name]:value
            }

        })
     }

     const submitdata=async(e)=>
        {
            e.preventDefault()
            // alert("user id is "+userId+" and password is "+userPass)
            console.log(feedbackData);
            // alert("user id is "+feedbackData.userName+", username is "+feedbackData.userEmail+", userpassword is "+feedbackData.userRating+"userRemark is"+feedbackData.userRemark)
    
          
            try {
                const response=await axios.post(URL,feedbackData)
                console.log(response);
                alert(response.data)
                
              } catch (error) {
                console.log(error);
                
                
              }

        }



    
    return (
        <>
        
            <Header />


            <form onSubmit={submitdata}>
                <div className="container feedback rounded w-50 mt-5" >
                    <h1 className="text-center">Submit Feedback</h1>
                    
                        <div>
                            <label htmlFor="Name" className="form-label  mt-3 " style={{ marginLeft: "200px" }}>Name</label>
                            <input type="text" className="form-control w-50 mt-1 " style={{ marginLeft: "200px" }} name="userName" id="userName" placeholder="enter your Name" value={feedbackData.userName} onChange={handleData}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label  mt-1 " style={{ marginLeft: "200px" }}>Email</label>
                            <input type="email" className="form-control w-50 mt-1 " style={{ marginLeft: "200px" }} id="userEmail" name="userEmail" placeholder="enter your email" value={feedbackData.userEmail} onChange={handleData} />
                        </div>
                        <label htmlFor="" className="mt-1" style={{ marginLeft: "200px" }}>Rating</label>
                        <select name="userRating" id="userRating" className="form-select w-50 mt-4 "  style={{ marginLeft: "200px" }} aria-label="Default select example"value={feedbackData.userRating} onChange={handleData}>
                          
                            <option value="⭐" className="text-center">1⭐</option>
                            <option value="⭐⭐"  className="text-center">2⭐⭐</option>
                            <option value="⭐⭐⭐"  className="text-center">3⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐"  className="text-center">4⭐⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐⭐"  className="text-center">5⭐⭐⭐⭐⭐</option>
                        </select>
                        <h4 className="mt-3  " style={{ marginLeft: "200px" }}>Remark</h4>
                        <textarea name="userRemark" id="userRemark" className="form-control w-50  mt-1 " style={{ marginLeft: "200px" }} value={feedbackData.userRemark} onChange={handleData}></textarea>
                        <button className="btn btn-success mt-5" style={{ marginLeft: "500px" }}>Submit</button>
                        <div className="mt-5 " style={{ height: "20px" }}>


                        </div>
                    

                </div>

            </form>

        </>
    )
}
export default Feedback