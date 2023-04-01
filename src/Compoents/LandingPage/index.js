import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../assets/logo.png'
import iphone from '../assets/iphone.png'
import BackGroundVideo from "../assets/bg-video.mp4"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { gymContext } from '../../Context/gymContext'
// Landing Page
const LandingPage = () => {
	const {data , terms, location} = useContext(gymContext)
	// console.log(data)
	const navigate= useNavigate()
 return (
    <div>
      <header>
		<nav>
      <img src={logo} alt="logo" className='logo'/>
			<ul>
				<li><button onClick={()=>{navigate(`/findGymPage`)}} className="btn" >Find Gym</button></li>
				<li><button className='btn' >About</button></li>
			</ul>
		</nav>
	</header>
	<main>
		<video autoPlay={true} loop muted>
			<source src={BackGroundVideo} type="video/mp4" />
		</video>
		<div className="content">
      <div className="content-title">
      <h1>JOIN WTF</h1>
			<p>Lorem ipsum dolor sit amet</p>
      </div>
			<img src={iphone} alt="Your Image" width={700} />
		</div>
	</main>
    </div>
  )
}

export default LandingPage
