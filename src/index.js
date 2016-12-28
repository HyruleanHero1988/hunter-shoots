import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Redirect, Route, browserHistory, IndexRoute } from 'react-router';
import Family from './family';
import Home from './home';
import './index.css';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
      <IndexRoute component={Home}/>

			<Route path='/family' component={Family}/>
		</Route>
	</Router>
), document.getElementById('root')
);
