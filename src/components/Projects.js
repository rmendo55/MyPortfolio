import React, {useEffect} from 'react'
import Header from './Header'
import Thumbnail from './Thumbnail'
import Aos from "aos"
import "aos/dist/aos.css"

function Projects() {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return(
        <div className="projects">
            <div className="header-component">
                <Header title="Projects" /> 
            </div>
             <div className="thumbnail-container">
                 <div data-aos="fade-right" className="thumbnail-content">
                    <Thumbnail 
                    src="main_page.png" 
                    alt="Fusion Colors Main" 
                    label="Fusion Colors Database"
                    description="Register incoming car parts for Fusion Colors located at Santa Maria, CA. 
                    Can search, delete, upload images, and update inventory."
                    id=""
                    />
                 </div>
                 <div data-aos="fade-up" className="thumbnail-content">
                    <Thumbnail 
                    src="job_search_main.png" 
                    alt="Job Search Main" 
                    label="Job Search"
                    description="Develop a web application that allows a user to search for jobs and 
                    view all jobs related to that job search. Used a public API"
                    id=""
                    />
                 </div>
                 <div data-aos="fade-left" className="thumbnail-content">
                    <Thumbnail 
                    src="sort_algo_graph.png" 
                    alt="Sorting Algorithm Main" 
                    label="Sorting Algorithm Comparison"
                    description="Develop a program that implements different sorting algorithms and 
                    then compares all sorting algorithms on different sets of data."
                    id=""
                    />
                 </div>
             </div>
             <div className="thumbnail-container">
                <div data-aos="fade-right" className="thumbnail-content">
                    <Thumbnail 
                    src="memory_game.png" 
                    alt="Memory Game Main" 
                    label="Memory Game"
                    description="Developed a single player version JavaFx game where user is to turn 
                    over pairs of matching cards."
                    id=""
                    />
                </div>
                 <div data-aos="fade-left" className="thumbnail-content">
                        <Thumbnail 
                        src="maze_path.png" 
                        alt="Stack Maze Solver Main" 
                        label="Stack Maze Solver"
                        description="Implemented a maze solver program that utilizes a stack."
                        id="stack-maze"
                        />
                 </div>
             </div>
        </div>
    )
}

export default Projects;