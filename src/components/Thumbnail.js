import React from 'react'

function Thumbnail(props) {
    return(
        <div className="card" style={{width:"25vw"}}>
            <img className="card-img-top" src={props.src} alt={props.alt} style={{width:"100%"}}/>
            <div className="card-body">
                <h4 className="card-title" style={{color: "black", textAlign: "center", fontSize: "1.5vw", marginBottom: "10%"}}>{props.label}</h4>
                <p className="card-text" style={{color: "black", fontSize: "1.2vw", marginBottom: "10%"}}>{props.description}</p>
                <a href="#" className="btn btn-primary" id="view-btn" style={{fontSize: "1.2vw"}}>View</a>
                <a href="#" className="btn btn-primary" id="view-btn" style={{fontSize: "1.2vw"}}>View Code</a>
            </div>
        </div>
    )
}

export default Thumbnail