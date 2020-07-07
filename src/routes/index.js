import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { DND, ABOUT, MAPS, RESUME, CONTACT } from '../constants/routes'

import Main from '../containers/Main'
import About from '../containers/pages/About'
import DnD from '../containers/pages/DnD'
import Maps from '../containers/pages/Maps'
import Resume from '../containers/pages/Resume'
import Contact from '../containers/pages/Contact'

const browserHistory = createBrowserHistory()

export default class Routes extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<Main>
					<Switch>
						<Route path={ABOUT} exact component={About} />
						<Route path={DND} component={DnD} />
						<Route path={MAPS} component={Maps} />
						<Route path={RESUME} component={Resume} />
						<Route path={CONTACT} component={Contact} />
						<Redirect from='/' to={ABOUT} />
					</Switch>
				</Main>
			</HashRouter>
		)
	}
}
