import React, { useState } from 'react'
import './Header.scss'
import liya from '../../../src/images/liya-white.png'
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
	const [show, setShow] = useState(false)

	// const menuBtn = document.querySelector('.menu-btn');
	// let menuOpen = false;
	// menuBtn.addEventListener('click', () => {
	// 	if (!menuOpen) {
	// 		menuBtn.classList.add('open');
	// 		menuOpen = true
	// 	} else {
	// 		menuBtn.classList.remove('open');
	// 		menuOpen = false;
	// 	}
	// })

	// const handleClick = () => {
	// 	const menuBtn = document.querySelector('.menu');
	// 	let menuOpen = false;
	// 	if (!menuOpen) {
	// 		menuBtn.classList.add('open');
	// 		menuOpen = true
	// 	} else {
	// 		menuBtn.classList.remove('open');
	// 		menuOpen = false;
	// 	}
	// }

	return (
		<div className="nav">
			<ul className='ul-first'>
				<li className="logo"><img src={liya} alt="image" /></li>
				<li className="pricing"><a href="#">PRICING</a> </li>
				<li className="time"><a href="#">OPEN TIME</a></li>
				<li className="adress"><a href="#">ADRESS</a></li>
				<li className="about"><a href="#">ABOUT</a></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="pricing"><a href="#">PRICING</a> </li>
				<li className="time"><a href="#">OPEN TIME</a></li>
				<li className="adress"><a href="#">ADRESS</a></li>
				<li className="about"><a href="#">ABOUT</a></li>
			</ul>}
		</div>
	)
}

export default Header