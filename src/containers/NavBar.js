import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { ABOUT, RESUME, CONTACT, PORTFOLIO } from '../constants/routes'

const NavBar = (props) => {
	return (
		<div className='row'>
			<nav className='col-12 navbar navbar-expand-lg navbar-light bg-transparent sticky-top'>
				<a className='navbar-brand' href='/' target='_blank' title='View all projects'>
					<img src={logo} alt={'logo'} className='img-fluid logo' />
				</a>
				<span className='navbar-text text-uppercase'>Madalina Rosca</span>
				<button className='navbar-toggler' type='button' onClick={() => console.log('toggle navbar')}>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse justify-content-end' id='navbar'>
					<ul className='navbar-nav'>
						<NavLink className='menu-item nav-link px-0' to={ABOUT}>
							About
						</NavLink>
						<NavLink className='menu-item nav-link px-0' to={PORTFOLIO}>
							Portfolio
						</NavLink>
						<NavLink className='menu-item nav-link px-0' to={RESUME}>
							Resume
						</NavLink>
						<NavLink className='menu-item nav-link px-0' to={CONTACT}>
							Contact
						</NavLink>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
