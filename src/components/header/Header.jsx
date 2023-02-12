import React, { useState } from 'react'
import './Header.scss'
import liya from '../../../src/images/liya-white.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

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
				<AnchorLink href="#foto" className="logo"><img src={liya} alt="image" /></AnchorLink>
				<li className="pricing"><AnchorLink href="#pricing">PRICING</AnchorLink> </li>
				<li className="time"><AnchorLink href="#open-time">OPEN TIME</AnchorLink></li>
				<li className="adress"><AnchorLink href="#adress">ADRESS</AnchorLink></li>
				<li><AnchorLink href="#about" >ABOUT</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="pricing"><AnchorLink href="#pricing">PRICING</AnchorLink> </li>
				<li className="time"><AnchorLink href="#open-time">OPEN TIME</AnchorLink></li>
				<li className="adress"><AnchorLink href="#adress">ADRESS</AnchorLink></li>
				<li className="about"><AnchorLink href="#about">ABOUT</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header