import React from "react";



function Card(props) {


	return (

		<div className="tinder-top">

			<div className="tinder-card">

				<img className="img-tinder" src="https://placeimg.com/600/300/people" />

				<div className="tinder-info">
					<span className="info-1">{props.name}</span>
					<span className="info-2">Passionate</span>
					<span className="info-3">{props.age} years old</span>
				</div>

			</div>

			

		</div>
	);
}

export default Card;
