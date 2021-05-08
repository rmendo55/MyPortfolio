import React from 'react'

function Header(props) {
    return(
        <div className="header" id={props.name}>
            <h1 className="header-title">{props.title}</h1>
        </div>
    )
}

export default Header