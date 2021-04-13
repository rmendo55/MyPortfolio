import React from 'react'

function Thumbnail(props) {
    return(
        <div className="card" style={{width:"400px"}}>
            <img className="card-img-top" src={props.src} alt={props.alt} style={{width:"100%"}}/>
            <div className="card-body">
                <h4 className="card-title" style={{color: "black", textAlign: "center"}}>{props.label}</h4>
                <p className="card-text" style={{color: "black"}}>{props.description}</p>
                <a href="#" className="btn btn-primary" id="view-btn">View</a>
                <a href="#" className="btn btn-primary" id="view-btn">View Code</a>
            </div>
        </div>
    )
}

export default Thumbnail