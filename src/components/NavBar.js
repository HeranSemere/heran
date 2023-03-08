import 'index.css'
import { useState} from 'react';

const NavBar = ({aboutRef, projectsRef, skillsRef}) => {

    const [selectedItem, setSelectedItem] = useState("home");

    const scrollBottom = (e, value) => {
        setSelectedItem(value);
        e.current.scrollIntoView({
          behavior: "smooth"
        });
      };

    return (
        <>
            <div className="navbar">
                <a href="#home" onClick={() => scrollBottom(aboutRef, "home")} className={selectedItem === "home" ? "active" : ""}>Home</a>
                <a href="#skills" onClick={() => scrollBottom(skillsRef,"skills")} className={selectedItem === "skills" ? "active" : ""}>Skills</a>
                <a href="#projects" onClick={() => scrollBottom(projectsRef, "projects")} className={selectedItem === "projects" ? "active" : ""}>Projects</a>
                {/* <a href="#contact" onClick={() => scrollBottom(contactRef)}>Contact</a> */}
            </div>

        </>
    );
}

export default NavBar;