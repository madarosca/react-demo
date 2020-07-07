import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { DND, ABOUT } from '../constants/routes'

const NavBar = (props) => {
	return (
		<div className='row'>
			<nav className='col-12 navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='/' target='_blank' title='View all projects'>
					<img src={logo} alt={'logo'} className='img-fluid logo' />
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<NavLink className='nav-item nav-link' to={ABOUT} onClick={() => {}}>
							About me
						</NavLink>
						<NavLink className='nav-item nav-link' to={DND} onClick={() => {}}>
							Drag & Drop
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
