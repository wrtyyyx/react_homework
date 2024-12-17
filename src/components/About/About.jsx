import './About.css'
import {useState} from "react";
const About = () => {
    const[count, setCount] = useState(0)
    return (
        <>
            <h1>
                Hello i`m Dmitry :-)
            </h1>
            <div className='title'>
                some try play with useState. mySkills: {count}
            </div>

            <div className='buttons'>

                <button className='glow-on-hover' onClick={() => {
                    setCount(count + 10000)
                }}>increment
                </button>
                <button className='glow-on-hover' onClick={() => {
                    setCount(count + 100)
                }}>detriment
                </button>
            </div>


        </>
    );
};

export default About;