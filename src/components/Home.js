import React from 'react'

function Home() {
    return (
        <div className="container my-4" id="home-container">
            <div className="float-lg-left" id="intro-txt">
                <h3>Hello! I'm Rafael Mendoza <br/>Welcome to my website</h3>
                <h4>I am a Software Engineer & <br/> Quality Assurance Engineer</h4>
            </div>
            <div className="float-lg-right" className="intro-img">
            <img src="homeImg2.png.crdownload"  alt="Home image" id="home-img"/>
            </div>
        </div>
    )
}

export default Home;