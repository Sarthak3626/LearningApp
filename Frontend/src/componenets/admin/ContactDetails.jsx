
import axios from "axios"
import "./css/allcontact.css"
import { useState } from "react"
import { Link } from "react-router-dom"
function ContactDetails({contactArray}) {
    const [contact,setContact]=useState(contactArray)
    
    const deleteContact=async(e,contactId)=>{
        alert (contactId)
        const URL=`http://localhost:3200/api/admin/removeContact/${contactId}`
    
    try {
        if(window.confirm("Are you sure to delete this contact"))
        {
        const response= await axios.delete(URL)
        console.log(response.acknowledged);
        if(response.data.acknowledged){
            alert("contact deleted successfully")
      setContact(contact.filter((item)=>(item._id!=contactId)))
    }//confirm if close
        
    }} catch (error) {
        console.log(error);
        
        
    }
   
}

    return (
        <>
     <div className="table-container">
            <table >
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Question</th>
                        <th>Select</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((item) => (
                            <tr key={item._id}>
                                <td>{item.userName}</td>
                                <td>{item.userEmail}</td>
                                <td>{item.userQuestion}</td>
                                <td className="tdb">
                                <button className="btn btn-danger" onClick={(e)=>{deleteContact(e,item._id)}}>Delete</button>
                                <Link to={`/UpdateContact/${item._id}`}>
                                <button type="button" className="deletebutton btn btn-success "  style={{backgroundColor:"green"}}>Update</button>

                                </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
        
    )
}

export default ContactDetails
