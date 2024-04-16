import React from 'react'
import './Moon.css'
import { NavLink } from 'react-router-dom'
import moon from '../../assets/moon.png'
import recdest from '../../assets/Rectangle-dest.png'
const Moon = () => {
  return (
        <div className="dest-main">
            <div className="dest-image">
                <p ><span>01</span> PICK YOUR DESTINATION</p>
                <img src={moon} alt="moon" />
            </div>
            <div className="dest-text">
                <div className="dest-links">
                    <NavLink to="/destination" activeClassName="active">MOON</NavLink>
                    <NavLink to="/destination/mars" activeClassName="active">MARS</NavLink>
                    <NavLink to="/destination/europa" activeClassName="active">EUROPA</NavLink>
                    <NavLink to="/destination/titan" activeClassName="active">TITAN</NavLink>
                </div>
                <p className="moon">MOON</p>
                <p className="moontext">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <img className="destrec" src={recdest} alt="rectangle" />
                <div className="ending-des">
                    <div className="end">
                        <span>AVG. DISTANCE</span>
                        <span>384,400 km</span>
                    </div>
                    <div className="end">
                        <span>Est. travel time</span>
                        <span>3 days</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Moon