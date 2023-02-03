import React from "react"
import './Mid-section.scss'
import img1 from '../src/images/clothes.png'
import img2 from '../src/images/img-two.png'

function MidSection() {
	return (
		<div className="section">
			<img className="img1 img" src={img1} alt="" />
			<img className="img2 img" src={img2} alt="" />
			<img className="img3 img" src="" alt="" />
			<img className="img4 img" src="" alt="" />
			<img className="img5 img" src="" alt="" />
		</div>
	)
}

export default MidSection