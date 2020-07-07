import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Main from '../containers/Main'
import About from '../containers/views/AboutPage'
import DnD from '../containers/views/DnD'

const browserHistory = createBrowserHistory()

export default class Routes extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<Main>
					<Switch>
						<Route path={'/'} exact component={About} />
						<Route path={'/dnd'} component={DnD} />
					</Switch>
				</Main>
			</HashRouter>
		)
	}
}
