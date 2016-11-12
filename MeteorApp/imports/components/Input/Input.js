import React from "react";
import ReactDOM from "react-dom";

import { styles } from "./styles";

export default class Input extends React.Component {
	render() {
		return (
			<input type={ this.props.type } placeholder={ this.props.placeholder } style={ styles.input } />
		);
	}
}

Input.propTypes = {
	placeholder: React.PropTypes.string,
	type: React.PropTypes.string
};


Input.defaultProps = {
	type: "text",
	placeholder: "Input something here..."
};