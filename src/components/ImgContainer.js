import React from 'react'
import ImgComponent from './ImgComponent'

function ImgContainer() {
	return(
		<div className="img-container">
			<div className="first-row">
				<ImgComponent name="myImages/kotlin.jpg"/>
				<ImgComponent name="myImages/java.webp"/>
				<ImgComponent name="myImages/python.png"/>
				<ImgComponent name="myImages/javascript.png"/>
			</div>
			<div className="second-row">
				<ImgComponent name="myImages/html.png"/>
				<ImgComponent name="myImages/css.webp"/>
				<ImgComponent name="myImages/bootstrap.png"/>
				<ImgComponent name="myImages/android.png"/>
			</div>
			<div className="third-row">
				<ImgComponent name="myImages/postgres.jpeg"/>
				<ImgComponent name="myImages/php.svg"/>
				<ImgComponent name="myImages/mysql.png"/>
			</div>
		</div>
	)
}

export default ImgContainer;