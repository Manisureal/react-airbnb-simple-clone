import React from "react";
import "./flat.css";

class Flat extends React.Component {
	render() {

		const title = `${this.props.building.priceCurrency}${this.props.building.price} - ${this.props.building.name}`
		const style = {
			backgroundImage: `url('${this.props.building.imageUrl}')`
		}

		console.log(title);

		return (
			<div className="flat">
				 <div className="flat-picture" style={style}></div>
				 <div className="flat-title">
				 	{title}
				 </div>
			</div>
		)
	}
}

export default Flat;