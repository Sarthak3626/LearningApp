import Header from './componenets/Header'
// // import Trainers_Details from './componenets/Trainers_Details'
// // import Course_details from './componenets/Course_Details'
import Carousel from './componenets/carousel'
import Contactus from './componenets/Contactus'
import Notice from './componenets/Notice'
// import Adminlogin from "./componenets/admin/Adminlogin"

function App()
{
  return(
    <>
    <div style={{backgroundColor:"white"}}>
      <div style={{marginBottom:"40px",display:'flex'}}>
        
     <Header/>


    </div>
     <div style={{marginBottom:"40px",display:"flex",gap:"50px"}}>
     <Carousel/>   
      <Notice/>
     </div>
     <div>

      
     <Contactus/></div>
     </div>
     
      {/* <Adminlogin/> */}

   \
   
     
     
     
    </>
  )
}

export default App
