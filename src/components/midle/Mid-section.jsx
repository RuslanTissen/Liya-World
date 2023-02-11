import React from "react"
import './Mid-section.scss'

function MidSection(props) {
	let { title, text, image } = props

	return (
		<div className="section">
			<div className="section-text">
				<div className="title">{title} </div>
				<div className="text">{text}</div>
			</div>
		<div className="img-cont"><img className="img1 img" src={image} alt="image" /></div>
		</div>
	)
}

export default MidSection