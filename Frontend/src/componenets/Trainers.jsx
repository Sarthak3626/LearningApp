import '../css/trainers.css'
function Trainers({pic,tname,qualif,email,exp})
{
    return(
        <>
        <div className="trainer-card">
            <img src={pic} alt="" className="img" />
            <h5 className="details">Name:{tname}</h5>
            <h5 className="details">Qualification:{qualif}</h5>
            <h5 className="details">Email:{email}</h5>
            <h5 className="details">Experience:{exp}</h5>

        </div>
        </>

    )
}
export default Trainers