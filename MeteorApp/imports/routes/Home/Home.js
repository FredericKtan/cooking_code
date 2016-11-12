/*========================
== Import from packages ==
========================*/
import React from "react";

/*===============================
== Import from home-made files ==
===============================*/
import { styles } from "./styles";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<h2>Home</h2>
				<hr/>
				<p>
					Hello world ! This is the first version of Cooking Code !<br/>
					This application is meant to become the base of the next projects with Meteor, React, React-Native and Redux.
				</p>
			</div>
		);
	};
}