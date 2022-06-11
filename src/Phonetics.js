import React from "react";

import PhoneticsAudio from "./PhoneticsAudio";

export default function Phonetics(props) {
	if (props.phonetics.audio) {
		return (
			<div className="Phonetics">
				<PhoneticsAudio phonetics={props.phonetics.audio} />
				<span> {props.phonetics.text}</span>
			</div>
		);
	} else {
		return <div className="Phonetics">{props.phonetics.text}</div>;
	}
}
