import React from 'react'
import { PUBLIC_URL } from '../constants/environment'

const NavBar = (props) => {
	console.log(PUBLIC_URL)
	return (
		<div className='row'>
			<nav className='col-12 navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand' href='/'>
					<img src={PUBLIC_URL +  '/assets/logo.svg'} />
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
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link disabled' href='#'>
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
