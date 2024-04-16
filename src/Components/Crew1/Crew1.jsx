import React from 'react'
import './Crew1.css'
import { NavLink } from 'react-router-dom'
import crew1img from '../../assets/crew1image.png'
const Crew1 = () => {
  return (
    <div className='crew-main'>
        <div className="crew-text">
        <p className='crew-textp'><span>02</span>MEET YOUR CREW</p>
        <div className='crewps'>
            <p>COMMANDER</p>
            <p>DOUGLAS HURLEY</p>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <div className="crew-links">
        <NavLink to="/crew" activeClassName="active">
            
        </NavLink>
        <NavLink to="/crew/crew2" activeClassName="active">
            
        </NavLink>
        <NavLink to="/crew/crew3" activeClassName="active">
            
        </NavLink>
        <NavLink to="/crew/crew4" activeClassName="active">
            
        </NavLink>
        </div>
        </div>
        <div className="crew-image">
        <img src={crew1img} alt= "crew1img" />
        </div>
    </div>
  )
}

export default Crew1