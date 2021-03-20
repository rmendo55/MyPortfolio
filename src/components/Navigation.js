import React from 'react'

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <span className="navbar-text">RM</span>
        <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#collapse_target" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav">
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