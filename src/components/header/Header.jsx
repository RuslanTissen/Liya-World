import React from 'react'
import './Header.scss'
import liya from '../../../src/images/liya-white.png'
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
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
			<ul>
				<li className="logo"><img src={liya} alt="image" /></li>
				<li className="pricing"><a href="#">PRICING</a> </li>
				<li className="time"><a href="#">OPEN TIME</a></li>
				<li className="adress"><a href="#">ADRESS</a></li>
				<li className="about"><a href="#">ABOUT</a></li>
				<GiHamburgerMenu style={{fontSize:"1.5em"}}/>
				{/* <div onClick={() => handleClick} className="menu"><div className="menu-btn"></div></div> */}
			</ul>

		</div>
	)
}

export default Header