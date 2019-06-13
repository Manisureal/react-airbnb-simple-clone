import React from "react";
import "./marker.css";

class Marker extends React.Component {
	render() {
		let selected = "marker"

		if (this.props.selectedFlat) {
			selected += " selected"
		}

		return (
			<div className={selected}>
				{this.props.currency} 
				{ " " }
				{this.props.text}
			</div>
		);
	}
}

export default Marker