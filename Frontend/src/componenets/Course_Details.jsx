import '../css/course_details.css'
import Course from './Course'
import Header from './Header'
function Course_Details()
{
    let customStyle={
        color:"red",
        fontSize:"30px",
       
        textAlign:"center"
    }
    

    return(
        <>
        <div>
         <Header/>
        </div>

        <p style={customStyle}>
            Our Courses

            </p>

            <div className='flex-container'>
                <Course course_details={{pic:"pyhon.png", name:" Python",duration:" 2 months" ,fees:" 5000",prereq:" Basic Programing" }}/>
                <Course course_details={{pic:"mern.webp", name:" MERN",duration:" 2 months" ,fees:" 6000",prereq:" HTML,JS,CSS" }}/>
                <Course course_details={{pic:"java.png", name:" Java",duration:" 3 months" ,fees:" 8000",prereq:" Basic Knowlege of Programing" }}/>
                <Course course_details={{pic:"dsa.jpg", name:" DSA (Java)",duration:" 4 months" ,fees:" 8000",prereq:"Core Java" }}/>
            </div>


        </>

    )
}

export default Course_Details