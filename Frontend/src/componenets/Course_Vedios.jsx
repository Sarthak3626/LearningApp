import"../css/coursevedio.css"
import Header from "./Header"
import Vedio from "./Vedio"
function Course_Vedios()
{
    return(
        <>
        <Header/>
        <div className="course" >
        <Vedio vedio_tittle="MERN " vedio_name="vedios/DSA.mp4"/>
        <Vedio vedio_tittle="Java " vedio_name="vedios/java.mp4"/>
        <Vedio vedio_tittle="Phython" vedio_name="vedios/mern.mp4"/>
        <Vedio vedio_tittle="DSA" vedio_name="vedios/pyhton.mp4"/>
        
        </div>
       
        
        </>
    )
}
export default Course_Vedios