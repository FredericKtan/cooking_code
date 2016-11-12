/*========================
== Import from packages ==
========================*/
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { FlowRouter} from "meteor/kadira:flow-router";
import { mount } from "react-mounter";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

/*===============================
== Import from home-made files ==
===============================*/
import styles from "../config/styles";
import Form from "../imports/components/Form/Form";
import LoggedOut from "../imports/layouts/LoggedOut";
import Home from "../imports/routes/Home";

/*==================================
== Required codes for Material UI ==
==================================*/
injectTapEventPlugin();

/*========================
== Start of application ==
========================*/

const HomeLayout = ({ layout, content }) => (
	<div>
		<MuiThemeProvider>
			{ layout() }
			<div style={ styles.layoutContent }>
				<div style={ styles.content }>
					{ content() }
				</div>
			</div>
		</MuiThemeProvider>
	</div>
);

FlowRouter.route("/", {
	action: function(params, queryParams) {
		mount(Home, {
			layout: () => (<LoggedOut />),
			content: () => (<Home />)
		});
	},
	name: "home"
});