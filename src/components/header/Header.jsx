import React from 'react'
import './Header.scss'
import liya from '../../../src/images/liya.png'

function Header() {
	return (
		<div className="nav">
			<ul>
				<li className="logo"><img src={liya} alt="" /></li>
				<li className="pricing">PRICING</li>
				<li className="time">OPEN TIME</li>
				<li className="adress">ADRESS</li>
				<li className="about">ABOUT</li>
			</ul>
		</div>
	)
}

export default Header