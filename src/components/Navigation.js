import React from 'react'

const NavItem = props => {
    let linkString = "#" + props.name;
    const pageURI = window.location.pathname+window.location.search
    console.log(`pageURI: ${pageURI}`);
    const liClassName = (props.path === pageURI) ? "nav-item active-nav-item" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "px-5 nav-link"
    return (
      <li className={liClassName}>
        <a href={linkString} className={aClassName}> 
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </a>
      </li>
    );
}

function Navigation() {
  return(
      <nav className="navbar navbar-expand-lg py-4">
        <span className="navbar-text px-4">RAFAEL MENDOZA </span>
        <button className="navbar-toggler ml-auto custom-toggler" data-toggle="collapse" data-target="#collapse_target" aria-expanded="false" aria-label="Toggle navigation">
          <span className="line"></span> 
          <span className="line"></span> 
          <span className="line" style={{marginBottom: "0"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav ml-auto px-2">
                <NavItem path="/" name="Home" />
                <NavItem path="/About" name="About" />
                <NavItem path="/Projects" name="Projects" />
                <NavItem path="/Skills" name="Skills" />
                <NavItem path="/Contacts" name="Contact" />
                <NavItem path="/Resume" name="Resume" />
        </ul>
        </div>
      </nav>
  )
}

export default Navigation;