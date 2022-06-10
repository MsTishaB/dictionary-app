import React from "react";

// Can add a fontaweseom icon and have the sound play when you click on it but recommended
//that we create a new component and use the documentation
//from here - https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API or React Audo Player component
export default function Phonetics(props) {
	console.log(props);

	if (props.phonetics.audio) {
		return (
			<div className="Phonetics">
				<a href={props.phonetics.audio} target="_blank" rel="noreferrer">
					{props.phonetics.text}
				</a>
			</div>
		);
	} else {
		return <div className="Phonetics">{props.phonetics.text}</div>;
	}
}
