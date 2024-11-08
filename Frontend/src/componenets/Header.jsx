function Header()
{
    return(
        <>
    <div className="nava fixed-top">
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-danger" href="/">
                <i className="fas fa-pen-alt"></i> Learning App
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Course_Details">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Trainers_Details">Our Trainers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Feedback">Feedback</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/Course_Vedios">
                            <i className="fas fa-play-circle"></i> Videos
                        </a>
                    </li>
                    <li className="nav-item" style={{ marginLeft: "800px" }}>
                        <button className="btn btn-info">
                            <a href="" style={{ textDecoration: "none", color: "black" }}>Login</a>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<div style={{ height: "50px" }}>
    
</div>
        </>


    )


    

}
 export default Header
