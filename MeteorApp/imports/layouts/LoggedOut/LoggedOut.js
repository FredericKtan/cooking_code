/*========================
== Import from packages ==
========================*/
import React from "react";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import injectTapEventPlugin from 'react-tap-event-plugin';

/*===============================
== Import from home-made files ==
===============================*/
import { styles } from "./styles";

export default class LoggedOut extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			drawerOpen: false
		};
	}

	handleDrawerToggle() {
		this.setState({ drawerOpen: !this.state.drawerOpen });
	}

	render() {
		return (
			<div>
				<AppBar title="Cooking Code" onLeftIconButtonTouchTap={ this.handleDrawerToggle.bind(this) } style={ {backgroundColor: "#494949" } } />
				<Drawer  open={ true }>
					<AppBar 
						iconElementLeft={ <img src="/images/cooking-code-logo-white.svg" height="24" width="24" /> }
						iconStyleLeft={ { marginTop: 16 } }
						title="Cooking Code"
						style={ {backgroundColor: "#494949"} } 
					/>
					<MenuItem onTouchTap={ this.handleDrawerToggle.bind(this) }>Item 1</MenuItem>
					<MenuItem onTouchTap={ this.handleDrawerToggle.bind(this) }>Item 2</MenuItem>
					<MenuItem onTouchTap={ this.handleDrawerToggle.bind(this) }>Item 3</MenuItem>
				</Drawer>
				<div style={ styles.layoutContent }>
					<div style={ styles.content }>
						<h2>Home</h2>
						<hr/>
						<p>
							Hello world ! This is the first version of Cooking Code !<br/>
							This application is meant to become the base of the next projects with Meteor, React, React-Native and Redux.
						</p>
					</div>
				</div>
			</div>			
		);
	};
}