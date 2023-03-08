import { useState } from "react";
import { FaCode } from "react-icons/fa";


const ProjectCard = ({ slide, changeState }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        changeState(true)
        
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        changeState(false)
    };


    return (

        <div
            className="carousel-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img className={isHovered ? "carousel-image carousel-image-hover" : "carousel-image"} src={slide.image} />
            {isHovered && <div className="carousel-content">
                <p className="carousel-text pink carousel-title">ReactJS</p>
                <p className="carousel-text carousel-subtitle">Project X</p>
                <p className="carousel-text description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e.</p>
                <p className="carousel-text description" style={{float:'left', border:'solid 1px white', padding:'10px', width:'50px', marginRight:'5px', marginTop:'15px'}}>View</p>
                <p className="carousel-text description" style={{float:'left', border:'solid 1px white', padding:'10px', width:'50px', marginLeft:'5px', marginTop:'15px'}}>Code</p>
                
            </div>}
        </div>
    )
}


export default ProjectCard;