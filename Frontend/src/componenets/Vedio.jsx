import "../css/vedio.css"
function Vedio({vedio_tittle,vedio_name})
{
    return(
        <>
       
          <div className="course-vedio">
           


            <div className="tittle">
                <h1 className="details">{vedio_tittle}</h1>
            </div>
            <div className="ved">
            <video  width={700} height={400} controls
             src={vedio_name}>
           
            </video>
            

            </div>
            
            
              

          </div>

      
         
        </>
    )
}
export default Vedio