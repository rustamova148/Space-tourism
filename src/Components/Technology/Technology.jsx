import React from 'react'
import './Technology.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Technology = () => {
  return (
    <div className='technology-back'>
        <Navbar />
        <div className='tech-main'>
            <Outlet />
        </div>
    </div>
  )
}

export default Technology