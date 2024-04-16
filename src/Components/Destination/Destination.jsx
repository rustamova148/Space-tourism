import React from 'react'
import './Destination.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Destination = () => {
  return (
    <div className='background-dest'>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Destination