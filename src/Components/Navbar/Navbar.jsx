import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/Group 2.png"
import rectangle from "../../assets/Rectangle.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to="/">
        <img className = 'nav-logo' src={logo} alt="navlogo" />
        </NavLink>
        <img className = 'nav-rectangle' src={rectangle} alt="navlogo" />
        <div className="nav-pages">
            <ul>
            <li>
              <NavLink to="/" activeClassName="active"><span>00</span> HOME</NavLink>
            </li>
            <li>
              <NavLink to="/destination" activeClassName="active"><span>01</span> DESTINATION</NavLink>
            </li>
            <li>
              <NavLink to="/crew" activeClassName="active"><span>02</span> CREW</NavLink>
            </li>
            <li>
            <NavLink to="/technology" activeClassName="active"><span>03</span> TECHNOLOGY</NavLink>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar