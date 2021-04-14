import React from 'react'
import Header from './Header'

function About() {
    return(
        <div className="about-container">
            <Header title="About"/>
            <div className="about-main-container">
                <div className="left-side">
                    <div className="about-img-container">
                        <img src="myimages/apple.png"  alt="Apple image" className="about-img"/>
                    </div>
                    <div className="about-img-container">
                        <img src="myimages/csula.png"  alt="Csula image" className="about-img"/>
                    </div>
                </div>
                <div className="right-side">
                    <p className="about-paragraph">I am a first generation to go to college and I am a student at California State University, Los Angeles.
                        My expected graduation is May 29, 2021. Throught my time in college I have been working with
                        many technologies and have been working in different Software Engineering projects such as: Web Development,
                        Mobile Development, Machine Learning, Computer Vision and Desktop Applications. I am very passionate about my work
                        and I love Computer Science. After my graduation I will be working at Apple as A Quality Engineer. Very excited to
                        start my career.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;