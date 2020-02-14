import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


function Card(props) {
	return (

		<div className="tinder-top">


			<div className="tinder-card">

				<img className="img-tinder" src="https://placeimg.com/600/300/people" />

				<div className="tinder-info">
					<span className="info-1">Gabriel</span>
					<span className="info-2">Passionate</span>
					<span className="info-3">28 years old</span>
				</div>



			</div>

			<div className="actions">

				<div class="icon-container c-close">
					<IoMdClose />
				</div>
				<div class="icon-container c-heart">
					<FaHeart />
				</div>

			</div>

		</div>
	);
}

export default Card;
