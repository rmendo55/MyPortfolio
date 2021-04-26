import React from 'react'

function ImgComponent(props) {
	return(
		<div className="skill-img">
			<img className="img-skill" src={props.name} alt="Language img" />
		</div>
	)
}

export default ImgComponent;