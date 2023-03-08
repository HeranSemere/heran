import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ProjectCard from 'components/ProjectCard';
import Contact from 'pages/Contact';

const Projects = () => {

    const slides = [
        {
            image:
                'https://i.pinimg.com/originals/d7/09/63/d7096360f68372e97030faa089f6d1f9.png'

        },
        {
            image:
                'https://i.pinimg.com/originals/d7/09/63/d7096360f68372e97030faa089f6d1f9.png'
        },
        {
            image:
                'https://cdn.dribbble.com/users/461127/screenshots/14930642/profex_landing_page.png?compress=1&resize=400x300'
        },
        {
            image:
                'https://www.litmus.com/wp-content/uploads/2020/01/Webflow.gif'
        },
        {
            image:
                'https://i.pinimg.com/originals/d7/09/63/d7096360f68372e97030faa089f6d1f9.png'
        }
    ];


    const [current, setCurrent] = useState(0);
    const length = slides.length;
    let isHovered = false;

    const changeState = (state) => {
        isHovered = state;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    useEffect(() => {
        const interval = setInterval(() => {

            if (!isHovered) {
                nextSlide();
              }
        }, 1000); 

        return () => clearInterval(interval);
    }, [current]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div>
            <div className='full-screen content'>

                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                        {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                            Projects
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                            possimus est.
                        </p>
                    </div>

                    <section className='slider'>

                        <FaChevronLeft className='left-arrow' onClick={prevSlide} />
                        <FaChevronRight className='right-arrow' onClick={nextSlide} />
                        {slides.map((slide, index) => {
                            return (
                                <div
                                    // className={index === current ? 'slide active' : 'slide'}
                                    key={index}
                                >
                                    {index === current + 1 && (
                                        <ProjectCard slide={slide} changeState = {changeState}/>
                                    )}
                                    {index === current && (
                                        <ProjectCard slide={slide} changeState = {changeState}/>
                                    )}
                                    {index === current - 1 && (
                                        <ProjectCard slide={slide} changeState = {changeState}/>
                                    )}
                                </div>
                            );
                        })}
                    </section>

                </div>
                {/* Here */}


            </div>
            <Contact />
        </div>
    );
};

export default Projects;