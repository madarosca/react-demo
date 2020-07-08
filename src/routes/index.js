import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
import { DND, ABOUT, MAPS, RESUME, CONTACT, PORTFOLIO } from '../constants/routes'

import Main from '../containers/Main'
import About from '../containers/pages/About'
import DnD from '../containers/pages/Portfolio/DnD'
import Maps from '../containers/pages/Portfolio/Maps'
import Resume from '../containers/pages/Resume'
import Contact from '../containers/pages/Contact'
import Portfolio from '../containers/pages/Portfolio'

// const browserHistory = createBrowserHistory()

export default class Routes extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<Main>
					<Switch>
						<Route path={ABOUT} exact component={About} />
						<Route path={PORTFOLIO} component={Portfolio} />
						<Route path={`${PORTFOLIO}/${DND}`} component={DnD} />
						<Route path={`${PORTFOLIO}/${MAPS}`} component={Maps} />
						<Route path={RESUME} component={Resume} />
						<Route path={CONTACT} component={Contact} />
						<Redirect from='/' to={ABOUT} />
					</Switch>
				</Main>
			</HashRouter>
		)
	}
}
