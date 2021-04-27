import React from 'react'
import ImgComponent from './ImgComponent'

function ImgContainer() {
	return(
		<div className="img-container">
			<div className="first-row">
				<ImgComponent link="https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png"/>
				<ImgComponent link="https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png"/>
				<ImgComponent link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png"/>
				<ImgComponent link="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"/>
			</div>
			<div className="second-row">
				<ImgComponent link="https://static.javatpoint.com/htmlpages/images/html-tutorial.png"/>
				<ImgComponent link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"/>
				<ImgComponent link="https://hackr.io/tutorials/bootstrap/logo-bootstrap.svg?ver=1555328097"/>
				<ImgComponent link="https://styles.redditmedia.com/t5_wij63/styles/communityIcon_kdltvuvd05h41.png"/>
			</div>
			<div className="third-row">
				<ImgComponent link="https://polybit-apps.s3.amazonaws.com/stdlib/users/postgres/profile/image.png?1570066568769"/>
				<ImgComponent link="https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png"/>
				<ImgComponent link="https://www.matt-thornton.net/wordpress/wp-content/uploads/0dd7193f-e747-4a15-b797-818b9fac3656-mysql.png"/>
			</div>
		</div>
	)
}

export default ImgContainer;