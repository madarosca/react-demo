import React from 'react'
import NavBar from './NavBar'

const Main = (props) => {
	return (
		<div className='container-fluid app-container'>
			<div className='row'>
				<NavBar />
			</div>
			<div className='row'>
				{props.children}
			</div>
		</div>
	)
}

export default Main
