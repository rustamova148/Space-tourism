import React from 'react'
import './Europa.css'
import europa from '../../assets/Europa.png'
import { NavLink } from 'react-router-dom'
import recdest from '../../assets/Rectangle-dest.png'
const Europa = () => {
  return (
    <div className="dest-main">
            <div className="dest-image">
                <p style={{color:"white"}}><span style={{color:"#4F525A", marginRight:"7px"}}>01</span> PICK YOUR DESTINATION</p>
                <img src={europa} alt="europa" />
            </div>
            <div className="dest-text">
                <div className="dest-links">
                    <NavLink to="/destination" activeClassName="active">MOON</NavLink>
                    <NavLink to="/destination/mars" activeClassName="active">MARS</NavLink>
                    <NavLink to="/destination/europa" activeClassName="active">EUROPA</NavLink>
                    <NavLink to="/destination/titan" activeClassName="active">TITAN</NavLink>
                </div>
                <p className="moon">EUROPA</p>
                <p className="moontext">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <img className="destrec" src={recdest} alt="rectangle" />
                <div className="ending-des">
                    <div className="end">
                        <span>AVG. DISTANCE</span>
                        <span>628 MIL. km</span>
                    </div>
                    <div className="end">
                        <span>Est. travel time</span>
                        <span>3 years</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Europa