import React from 'react'
import './Titan.css'
import titan from '../../assets/titan.png'
import { NavLink } from 'react-router-dom'
import recdest from '../../assets/Rectangle-dest.png'

const Titan = () => {
  return (
    <div className="dest-main">
            <div className="dest-image">
                <p style={{color:"white"}}><span style={{color:"#4F525A", marginRight:"7px"}}>01</span> PICK YOUR DESTINATION</p>
                <img src={titan} alt="titan" />
            </div>
            <div className="dest-text">
                <div className="dest-links">
                    <NavLink to="/destination" activeClassName="active">MOON</NavLink>
                    <NavLink to="/destination/mars" activeClassName="active">MARS</NavLink>
                    <NavLink to="/destination/europa" activeClassName="active">EUROPA</NavLink>
                    <NavLink to="/destination/titan" activeClassName="active">TITAN</NavLink>
                </div>
                <p className="moon">TITAN</p>
                <p className="moontext">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                <img className="destrec" src={recdest} alt="rectangle" />
                <div className="ending-des">
                    <div className="end">
                        <span>AVG. DISTANCE</span>
                        <span>1.6 BIL. km</span>
                    </div>
                    <div className="end">
                        <span>Est. travel time</span>
                        <span>7 years</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Titan