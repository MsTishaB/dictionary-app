import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
	console.log(props.synonyms);
	if (Object.keys(props.synonyms).length !== 0) {
		return (
			<div>
				<ul className="Synonyms">
					{" "}
					Synonyms:{"  "}
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}> {synonym}</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}
