import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Main from '../containers/Main'
import About from '../containers/views/AboutPage'
import DnD from '../containers/views/DnD'
import { DND, ABOUT } from '../constants/routes'

const browserHistory = createBrowserHistory()

export default class Routes extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<Main>
					<Switch>
						<Route path={ABOUT} exact component={About} />
						<Route path={DND} component={DnD} />
						<Redirect from='/' to={ABOUT} />
					</Switch>
				</Main>
			</HashRouter>
		)
	}
}
