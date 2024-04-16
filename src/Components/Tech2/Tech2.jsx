import React from 'react'
import './Tech2.css'
import { NavLink } from 'react-router-dom'
import tech2img from '../../assets/tech2img.jpg'
const Tech2 = () => {
  return (
    <div className='techtextimg'>
        <div className="tech-text">
            <p className='tech-text-header'><span>03</span>SPACE LAUNCH 101</p>
            <div className='tech-link-texts'>
                <div className="tech-links">
                    <NavLink to="/technology" activeClassName="active">
                        <span>1</span>
                    </NavLink>
                    <NavLink to="/technology/tech2" activeClassName="active">
                        <span>2</span>
                    </NavLink>
                    <NavLink to="/technology/tech3" activeClassName="active">
                        <span>3</span>
                    </NavLink>
                </div>
                <div className="tech-intexts">
                    <p>THE TERMINOLOGY…</p>
                    <p>SPACEPORT</p>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
            </div>
        </div>
        <div className="tech-img">
            <img src={tech2img} alt="tech2img" />
        </div>
    </div>
  )
}

export default Tech2