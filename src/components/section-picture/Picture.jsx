import React from "react"
import clothes from '../../images/thread.png'
import './Picture.scss'

export default function Pictuer() {
	return (
		<div id="foto" className="picture">
			<div className="picture-container">
				<img src={clothes} alt="" />
			</div>
		</div>
	)
}