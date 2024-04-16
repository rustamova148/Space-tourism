import React from 'react'
import './Tech3.css'
import { NavLink } from 'react-router-dom'
import tech3img from '../../assets/Tech3img.jpg'
const Tech3 = () => {
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
                <p>SPACE CAPSULE</p>
                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
        </div>
    </div>
    <div className="tech-img">
        <img src={tech3img} alt="tech3img" />
    </div>
</div>
  )
}

export default Tech3