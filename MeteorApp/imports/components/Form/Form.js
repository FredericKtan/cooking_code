import React from "react";
import ReactDOM from "react-dom";

import { styles } from "./styles";
import Input from "../Input/Input";

/*====================================================================
== The form component will be used as a wrapper for multiple inputs ==
====================================================================*/
export default class Form extends React.Component {
	render() {
		return (
			<form>
				<h1 style={ styles.title }>
					{ this.props.title }
				</h1>
				<Input type="text" placeholder="First name" />
				<Input />
			</form>
		);
	}
}

Form.propTypes = {
	title: React.PropTypes.string
}


