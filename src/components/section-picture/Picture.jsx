import React from "react"
import clothes from '../../images/clothes.png'
import './Picture.scss'

export default function Pictuer() {
	return (
		<div className="picture">
			<div className="picture-container">
				<img src={clothes} alt="" />
			</div>
		</div>
	)
}