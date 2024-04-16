import React from 'react'
import './Crew.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
const Crew = () => {
  return (
    <div className='crew-back'>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Crew