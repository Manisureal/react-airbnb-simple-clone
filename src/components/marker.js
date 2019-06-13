import React from "react";
import "./marker.css";

class Marker extends React.Component {
	render() {
		if (this.props.selectedFlat != null) {
			if (this.props.selectedFlat.price === this.props.text) {
				return (
					<div className="marker selected">
						{this.props.currency} 
						{ " " }
						{this.props.text}
					</div>
				);
			} 
		}

		return (
			<div className="marker">
				{this.props.currency} 
				{ " " }
				{this.props.text}
			</div>
		);
	}
}

export default Marker