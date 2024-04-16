import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='background-home'>
        <Navbar/>
        <div className="home-main">
        <div className="space">
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <p>SPACE</p>
            <p>Let's face it; If you want to go to space, you might as well genuinely
                go to outer space and not hover kind of on the edge of it. Well sit back,
                and relax because we'll give you a truly out of this world experience!
            </p>
        </div>
        <div className="explore-box">
        <div className="transparent-box">
        </div>
        <div className="hovered-box">
                <span>EXPLORE</span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home