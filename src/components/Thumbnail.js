import React from 'react'

function Thumbnail(props) {
    return(
        <div className="card">
            <img className="card-img-top" src={props.src} alt={props.alt}/>
            <div className="card-body">
                <div className="card-title">
                    <h4>{props.label}</h4>
                </div>
                <div className="card-txt">
                    <p>{props.description}</p>
                </div>
                <div className="project-buttons">
                    <a href="#" className="btn btn-primary view-button" id="view-btn">View</a>
                    <a href="#" className="btn btn-primary view-button" id="view-btn">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;
