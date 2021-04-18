import React from 'react'

function Thumbnail(props) {
    return(
        <div className="card">
            <img className="card-img-top" src={props.src} alt={props.alt}/>
            <div className="card-body">
                <div className="card-title">
                    <h4 style={{color: "black", textAlign: "center", fontSize: "1.5vw"}}>{props.label}</h4>
                </div>
                <div className="card-txt">
                    <p style={{color: "black", fontSize: "1.2vw"}}>{props.description}</p>
                </div>
                <div className="project-buttons">
                    <a href="#" className="btn btn-primary" id="view-btn" style={{fontSize: "1.2vw"}}>View</a>
                    <a href="#" className="btn btn-primary" id="view-btn" style={{fontSize: "1.2vw"}}>View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail