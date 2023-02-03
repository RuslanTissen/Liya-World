import React from 'react'
import './Header.scss'

function Header() {
	return (
		<div className="nav">
			<ul>
				<li className="logo">LOGO</li>
				<li className="pricing">PRICING</li>
				<li className="time">WORKING TIME</li>
				<li className="adress">ADRESS</li>
				<li className="about">ABOUT</li>
			</ul>
		</div>
	)
}

export default Header