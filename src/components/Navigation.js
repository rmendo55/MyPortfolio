import React from 'react'

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active-nav-item" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "px-5 nav-link"
    console.log(aClassName);
    return (
      <li className={liClassName}>
            <a href={props.path} className={aClassName}>
              {props.name}
              {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
      </li>
    );
}

function Navigation() {
  return(
      <nav className="navbar navbar-expand-lg py-4 fixed-top">
        <span className="navbar-text px-4">RAFAEL MENDOZA</span>
        <button className="navbar-toggler ml-auto custom-toggler" data-toggle="collapse" data-target="#collapse_target" aria-expanded="false" aria-label="Toggle navigation">
          <span class="line"></span> 
          <span class="line"></span> 
          <span class="line" style={{marginBottom: "0"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav ml-auto px-2">
                <NavItem path="/" name="Home" />
                <NavItem path="/page2" name="About" />
                <NavItem path="/page3" name="Projects" />
                <NavItem path="/page4" name="Resume" />
        </ul>
        </div>
      </nav>
  )
}

export default Navigation;