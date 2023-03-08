import NavBar from 'components/NavBar';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import About from 'pages/About';
import React, { useRef } from 'react';
import './App.css';


function App() {

  const aboutRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()


  return (

    <div >
      <NavBar aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />
      <div className='content'>

        <div ref={aboutRef}>
          <About />
        </div>

        <div >
          <Skills ref={skillsRef} />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>

      </div>
      <div class="container-bottom">
        <svg class="svg-bottom" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path d="M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z" class="path"></path>
        </svg>
      </div>
    </div>
  );
}

export default App;




