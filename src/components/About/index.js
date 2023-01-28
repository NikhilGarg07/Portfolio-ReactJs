import { faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Engineering graduate specialized in Computer Science and Enginerring. Working on various frontend and backend projects during graduation</p>
                    <p>Completed final 6 months internship with IT company in React and worked along with a team of developers in creating several fullstack projects</p>
                    <p>Currently working as a Software Engineer I am looking for a better opportuniy in the field of web development where I can grow and upgrade my skills</p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJsSquare} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faDatabase} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;