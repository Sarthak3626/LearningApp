import Trainers from "./Trainers"
import '../css/trainer_details.css'
import Header from "./Header"
function Trainers_Details() 
{

    let customStyle={
        color:"red",
        fontSize:"30px",
       
        textAlign:"center"
    }
    return (
        <>
            <div>
                <Header/>
            </div>
            

            <p style={customStyle}>
            Our Trainers

            </p>

            <div className="flex-container" >
                < Trainers tname=" Anurag " qualif=" M.tech" email=" anurag@gmail.com" exp="30 years" pic="brim.jpeg"/>
                < Trainers tname=" Priyanshu " qualif=" MCA" email=" priyanshu@gmail.com" exp="20 years" pic="omen.png"/>
                < Trainers tname=" Dracu" qualif="BCA" email=" dracula@gmail.com" exp="10 years" pic="kj.gif"/>
                < Trainers tname=" Dhanno " qualif="B.tech" email=" dhanno@gmail.com" exp="5 years" pic="chamber.jpg"/>
            </div>



        </>

    )
}

export default Trainers_Details