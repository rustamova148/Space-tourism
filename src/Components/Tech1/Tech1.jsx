import React from 'react'
import './Tech1.css'
import { NavLink } from 'react-router-dom'
import tech1img from '../../assets/tech1img.jpg'
const Tech1 = () => {
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
                    <p>LAUNCH VEHICLE</p>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>
        </div>
        <div className="tech-img">
            <img src={tech1img} alt="tech1img" />
        </div>
    </div>
  )
}

export default Tech1