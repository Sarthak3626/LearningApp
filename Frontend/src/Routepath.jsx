import{BrowserRouter,Routes,Route}from "react-router-dom"
import App from "./App"
import Trainers_Details from"./componenets/Trainers_Details"
import Course_Details from "./componenets/Course_Details"
import Course_Vedios from "./componenets/Course_Vedios"
import Feedback from "./componenets/Feedback"
import Adminlogin from "./componenets/admin/Adminlogin"
import AdminHome from "./componenets/admin/AdminHome"
import AllContacts from "./componenets/admin/AllContacts"
import AllFeedback from "./componenets/admin/Feedbacks"
import Allnotice from "./componenets/admin/AllNotice"
import AddNotice from "./componenets/admin/AddNotice"
import UpdateContact from "./componenets/admin/UpdateContact"
function RoutePath()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/Trainers_Details" element={<Trainers_Details/>}></Route>
            <Route path="/Course_Details" element={<Course_Details/>}></Route>
            <Route path="/Course_Vedios" element={<Course_Vedios/>}></Route>
            <Route path="/Feedback" element={<Feedback/>}></Route>
            <Route path="/AdminLogin" element={<Adminlogin/>}></Route>
            <Route path="/AdminHome" element={<AdminHome/>}></Route>
            <Route path="/AllContacts" element={<AllContacts/>}></Route>
            <Route path="/AllFeedback" element={<AllFeedback/>}></Route>

            <Route path="/AddNotice" element={<AddNotice/>}></Route>
            <Route path="/viewNotices" element={<Allnotice/>}></Route>
            <Route path="/UpdateContact/:id" element={<UpdateContact/>}></Route>
    

        
           
        </Routes>
        </BrowserRouter>
        </>
    )
}
 export default RoutePath