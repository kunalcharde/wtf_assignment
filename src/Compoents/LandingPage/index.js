import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../assets/logo.png'
import iphone from '../assets/iphone.png'
import BackGroundVideo from "../assets/bg-video.mp4"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

	const navigate= useNavigate()
	
	const [locationData,setLocationData] = useState({long:"",lati:""})
	
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		  } 
		else {
			console.log("Geolocation is not supported by this browser.");
		}
		

	function showPosition(position) {
		console.log("Latitude: " + position.coords.latitude);
		console.log("Longitude: " + position.coords.longitude);
	
		setLocationData({...locationData,long:position.coords.longitude,lati:position.coords.latitude});
	  }
	console.log(locationData)
  return (
    <div>
      <header>
		<nav>
      <img src={logo} alt="logo" className='logo'/>
			<ul>
				<li><button onClick={()=>{navigate(`/findGymPage/${locationData.lati}/${locationData.long}`)}} >HOME</button></li>
				<li><button >Find Gym</button></li>
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
