import React from 'react'
import NavBar from './NavBar'

const Main = (props) => {
	return (
		<div className='container-fluid app-container'>
			<NavBar />
			{props.children}
		</div>
	)
}

export default Main
