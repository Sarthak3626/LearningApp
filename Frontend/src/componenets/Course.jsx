import '../css/course.css'
function Course({course_details})
{
    return(
        <>
        <div className='course-card'>
            <img src={course_details.pic} alt=""  className='pic' />
            <h5 className='details' >Name:{course_details.name} </h5>
            <h5 className='details' >Duration:{course_details.duration} </h5>
            <h5 className='details' >Fees:{course_details.fees} </h5>
            <h5 className='details' >Prerequisite:{course_details.prereq} </h5>


        </div>
        </>

    )
}
export default Course