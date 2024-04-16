import React from 'react'
import './Crew3.css'
import { NavLink } from 'react-router-dom'
import crew3img from '../../assets/crew3img.png'
const Crew3 = () => {
  return (
    <div className='crew-main'>
        <div className="crew-text">
        <p className='crew-textp'><span>02</span>MEET YOUR CREW</p>
        <div className='crewps'>
            <p>PILOT</p>
            <p>VICTOR GLOVER</p>
            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
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
        <img src={crew3img} alt= "crew3img" />
        </div>
    </div>
  )
}

export default Crew3