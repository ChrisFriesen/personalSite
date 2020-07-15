import React from 'react';
import { Link } from "react-router-dom";
import './main.css';

class MainTitle extends React.Component {
	render() {
		return (
			<div id='main-title'>
				<h1 className="title-name">Chris Friesen</h1>
				<h4>Collection of hacks others might find useful</h4>
				<MenuBar />
			</div>
		)
	}
}

class MenuBar extends React.Component {
	render() {
		return (
			<nav id='menu-bar'>
				<ul className='nav'>
					<li className='link-underline'><Link to='/litGraph'>LitGraph</Link></li>
					<li className='link-underline'><Link to='/phishingTest'>Phishing Test</Link></li>
					<li className='link-underline'><a href='./securityCalendar.js'>CyberSecurity Calendar</a></li>
				</ul>
			</nav>
		)
	}
}

export default MainTitle;