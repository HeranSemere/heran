import 'index.js'
import { FaCheckCircle } from 'react-icons/fa';

const SkillCard = () => {

    const skills = ['a', 'b', 'c', 'd', 'e', 'f', '', '', '', '', '', '']


    return (
        <div>
            <div className="skills">

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill, index) => (
                        <div key={skill} className={`skill skill-${(index+3)%4}`}>
                            <FaCheckCircle className='skill-icon h-full' />
                            <p className="skill-text">ReactJs</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

   
}


export default SkillCard;