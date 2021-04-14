import React from 'react'

function Home() {
    return (
        <div className="home-container">
            <div className="home-txt-container">
                <h3 style={{fontSize:"3vw"}}>Hello! I'm Rafael Mendoza Welcome to my website</h3>
                <h4 style={{fontSize:"3vw"}}>I am a Software Engineer & Quality Assurance Engineer</h4>
            </div>
            <div className="home-img-container">
                <img src="myimages/homeImg2.png"  alt="Home image" className="home-img"/>
            </div>
        </div>
    )
}

export default Home;