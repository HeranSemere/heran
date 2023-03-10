import 'index.js'
import { FaCheckCircle } from 'react-icons/fa';

const SkillCard = ({ data, index }) => {
    return (
        <div>
            <div className="skills">
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className={`skill skill-${(index + 3) % 4}`}>
                        {/* <FaCheckCircle className='skill-icon h-full' /> */}
                        <img src={data.fields.file.url} className='skill-image' />
                        <p className="skill-text">{data.fields.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    // style={/*index===3?{ color:'#82c4fc' }:{ color:'black'}*/}
}


export default SkillCard;