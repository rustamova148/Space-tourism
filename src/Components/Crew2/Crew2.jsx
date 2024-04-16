import React from 'react'
import './Crew2.css'
import { NavLink } from 'react-router-dom'
import crew2img from '../../assets/crew2img.png'
const Crew2 = () => {
  return (
    <div className='crew-main'>
        <div className="crew-text">
        <p className='crew-textp'><span>02</span>MEET YOUR CREW</p>
        <div className='crewps'>
            <p style={{fontSize: "32px", marginBottom: "40px", width:"320px"}}>MISSION SPECIALIST</p>
            <p style={{fontSize: "40px"}}>MARK SHUTTLEWORTH</p>
            <p >Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        </div>
        <div className="crew-links">
        <NavLink to="/crew" activeClassName="active">
        <div></div>
        </NavLink>
        <NavLink to="/crew/crew2" activeClassName="active">
        <div></div>
        </NavLink>
        <NavLink to="/crew/crew3" activeClassName="active">
        <div></div>
        </NavLink>
        <NavLink to="/crew/crew4" activeClassName="active">
        <div></div>
        </NavLink>
        </div>
        </div>
        <div className="crew-image">
        <img src={crew2img} alt= "crew2img" />
        </div>
    </div>
  )
}

export default Crew2