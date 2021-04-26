import React, {useEffect} from 'react'
import Header from './Header'
import Thumbnail from './Thumbnail'
import Aos from "aos"
import "aos/dist/aos.css"

function Projects() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
        <div>
            <Header title="Projects" />
            <div className="projects">
                <div className="thumbnail-container">
                    <div data-aos="fade-right" className="thumbnail-content">
                        <Thumbnail
                        src="myimages/main_page.png"
                        alt="Fusion Colors Main"
                        label="Fusion Colors Database"
                        description="Register incoming car parts for Fusion Colors located at Santa Maria, CA. Can search, delete, upload images, and update inventory."
                        srcCode="https://github.com/rmendo55/Projects/tree/master/src/fusion_colors"
                        />
                    </div>
                    <div data-aos="fade-up" className="thumbnail-content">
                        <Thumbnail
                        src="myimages/job_search_main.png"
                        alt="Job Search Main"
                        label="Job Search"
                        description="Develop a web application that allows a user to search for jobs and view all jobs related to that job search. Used a public API."
                        srcCode="https://github.com/rmendo55/JavaScript/tree/master/jobSearchVueApp"
                        />
                    </div>
                    <div data-aos="fade-left" className="thumbnail-content">
                        <Thumbnail
                        src="myimages/sort_algo_graph.png"
                        alt="Sorting Algorithm Main"
                        label="Sorting Algorithm Comparison"
                        description="Develop a program that implements different sorting algorithms and then compares all sorting algorithms on different sets of data."
                        srcCode="https://github.com/rmendo55/Projects/tree/master/src/sortingalgorithms"
                        />
                    </div>
                </div>
                <div className="thumbnail-container">
                    <div data-aos="fade-right" className="thumbnail-content">
                        <Thumbnail
                        src="myimages/memorygame.png"
                        alt="Memory Game Main"
                        label="Memory Game"
                        description="Developed a single player version JavaFx game where user is to turnover pairs of matching cards."
                        srcCode="https://github.com/rmendo55/Projects/tree/master/src/memory_game"
                        />
                    </div>
                    <div data-aos="fade-left" className="thumbnail-content">
                        <Thumbnail
                        src="myimages/mazepath.png"
                        alt="Stack Maze Solver Main"
                        label="Stack Maze Solver"
                        description="Implemented a maze solver program that utilizes a stack."
                        srcCode="https://github.com/rmendo55/Projects/tree/master/src/stackmazesolver"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
