import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './images/logo.jpg';
import './App.css';


import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';


class App extends Component {



	render() {
		return (
			<div className="App">
				<div className="sidebar">
					<img src={logo} className="App-logo" alt="logo" />
					<ul>

					<li><Link to={'/'}>HOME</Link></li>
					<li><Link to={'family'}>FAMILY/ENGAGEMENTS</Link></li>
					<li><Link>SENIORS/GLAMOUR</Link></li>
					<li><Link>WEDDINGS/EVENTS</Link></li>
					<li><Link>FACEBOOK PAGE</Link></li>
					<li><Link>PRICING/CONTACT</Link></li>
					</ul>
				</div>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
