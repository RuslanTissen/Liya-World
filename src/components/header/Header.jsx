import React from 'react'
import './Header.scss'
import liya from '../../../src/images/liya-white.png'
// import { GiHamburgerMenu } from 'react-icons/gi';

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

	const handleClick = () => {
		console.log('Hi Ruslan');
	}

	return (
		<div className="nav">
			<ul>
				<li className="logo"><img src={liya} alt="" /></li>
				<li className="pricing"><a href="#">PRICING</a> </li>
				<li className="time">OPEN TIME</li>
				<li className="adress">ADRESS</li>
				<li className="about">ABOUT</li>
				{/* <GiHamburgerMenu/> */}
				<div onClick={handleClick} className="menu"><div className="menu-btn"></div></div>
			</ul>
		</div>
	)
}

export default Header