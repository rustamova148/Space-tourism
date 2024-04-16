import React from 'react'
import './Crew4.css'
import { NavLink } from 'react-router-dom'
import crew4img from '../../assets/crew4img.png'
const Crew4 = () => {
  return (
    <div className='crew-main'>
        <div className="crew-text">
        <p className='crew-textp'><span>02</span>MEET YOUR CREW</p>
        <div className='crewps'>
            <p style={{width:"300px"}}>FLIGHT ENGINEER</p>
            <p>ANOUSHEH ANSARI</p>
            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
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
        <img src={crew4img} alt= "crew4img" />
        </div>
    </div>
  )
}

export default Crew4