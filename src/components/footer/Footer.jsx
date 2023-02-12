import React from 'react'
import './Footer.scss'
import liya from '../../images/liya-white.png'
import {GrFacebookOption} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn, FaTelegram} from 'react-icons/fa'

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-links">
				<a href="#"><img src={liya} alt="" /></a>
				<a href='#'><GrFacebookOption/></a>
				<a href='#'><BsTwitter/></a>
				<a href=""><FaLinkedinIn/></a>
				<a href=""><FaTelegram/></a>
			</div>

			{/* <div className="footer-adress">

			</div>
			
			<div className="footer-contactes">
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</div> */}
		</div>
	)
}