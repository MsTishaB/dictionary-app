import React from "react";
import "./PhoneticsAudio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function PhoneticsAudio(props) {
	const audio = new Audio(props.phonetics);

	const start = () => {
		audio.play();
	};

	return (
		<div className="PhoneticsAudio">
			<button onClick={start}>
				<FontAwesomeIcon icon={faCirclePlay} />
			</button>
		</div>
	);
}
