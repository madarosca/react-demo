import React from 'react'
import myPicture from '../../../assets/mada.jpg'

const About = () => {
	return (
		<div className='row'>
			<div className='col-lg-4'>
				<img src={myPicture} className='img-thumbnail mx-auto d-block' alt='Me' />
			</div>
			<div className='col-lg-8 align-self-center'>
				<div>
					<h1>A little about me</h1>
				</div>
				<div>
					<h4 className='color-primary font-italic font-weight-light'>Madalina Rosca - Frontend Web Developer</h4>
				</div>
				<br />
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus quis dui quis malesuada. Nam
						interdum dignissim risus. Quisque ligula ante, lacinia eu risus vitae, venenatis suscipit metus.
						Nam fermentum ligula nec quam lacinia pulvinar. Morbi tempor ante a est pretium, ac gravida ante
						cursus. Vestibulum dignissim velit non sem mattis, vel eleifend libero vehicula. Aliquam sapien
						elit, egestas et massa ut, malesuada pretium sem. Nunc consequat nisi eu elit pulvinar
						venenatis. Mauris eu accumsan justo. Vivamus et justo eget orci consectetur fermentum eget eget
						felis. Mauris velit felis, mattis ut molestie in, dapibus non felis. Aenean eu ipsum ante.
						Praesent lobortis vehicula ullamcorper. Sed vel turpis tellus. Fusce sapien neque, laoreet nec
						pretium vel, hendrerit tempus sem.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
