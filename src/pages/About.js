import logo from 'assets/grid.svg'

const About = () => {
    return (

        <div className='full-screen'>
            <div className="side-by-side about">
                <p className='about-text about-first'>
                    Hey, it's <span className='pink'>H</span>eran - your friendly neighborhood full-stack developer!
                </p>

                <p className='about-sub'>
                    Ready to bring your tech dreams to life? Let's team up and make some coding magic!✨
                </p>
            </div>

            <img className="side-by-side profile-img" src={logo} />



        </div>
    )
}

export default About;