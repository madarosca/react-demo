import React from 'react'
import { PORTFOLIO, DND, MAPS } from '../../../constants/routes'
import { NavLink, HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dnd from './DnD'
import Maps from './Maps'

const Portfolio = () => {
	return (
		<div className='col-12'>
			<h5 className='text-center'>My portfolio</h5>
			<div className='row col-12 mb-2'>
				<NavLink className='menu-item nav-link px-0 ml-0' to={`${PORTFOLIO}/${DND}`}>
					Drag & Drop
				</NavLink>
				<NavLink className='menu-item nav-link px-0' to={`${PORTFOLIO}/${MAPS}`}>
					Maps
				</NavLink>
			</div>
			<HashRouter basename='/'>
				<Switch>
					<Route path={`${PORTFOLIO}/${DND}`} component={Dnd} />
					<Route path={`${PORTFOLIO}/${MAPS}`} component={Maps} />
					<Redirect from={PORTFOLIO} to={`${PORTFOLIO}/${MAPS}`} />
				</Switch>
			</HashRouter>
		</div>
	)
}

export default Portfolio
