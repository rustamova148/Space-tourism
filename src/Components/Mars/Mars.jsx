import React from 'react'
import './Mars.css'
import mars from '../../assets/mars.png'
import { NavLink } from 'react-router-dom'
import recdest from '../../assets/Rectangle-dest.png'
const Mars = () => {
  return (
    <div className="dest-main">
            <div className="dest-image">
                <p style={{color:"white"}}><span style={{color:"#4F525A", marginRight:"7px"}}>01</span> PICK YOUR DESTINATION</p>
                <img src={mars} alt="mars" />
            </div>
            <div className="dest-text">
                <div className="dest-links">
                    <NavLink to="/destination" activeClassName="active">MOON</NavLink>
                    <NavLink to="/destination/mars" activeClassName="active">MARS</NavLink>
                    <NavLink to="/destination/europa" activeClassName="active">EUROPA</NavLink>
                    <NavLink to="/destination/titan" activeClassName="active">TITAN</NavLink>
                </div>
                <p className="moon">MARS</p>
                <p className="moontext">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                <img className="destrec" src={recdest} alt="rectangle" />
                <div className="ending-des">
                    <div className="end">
                        <span>AVG. DISTANCE</span>
                        <span>225 MIL. km</span>
                    </div>
                    <div className="end">
                        <span>Est. travel time</span>
                        <span>9 months</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Mars