import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [results, setResults] = useState("");
	const [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function searchWord() {
		//documentation: https://dictionaryapi.dev/
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		searchWord();
	}

	function updateKeyword(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		searchWord();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h1>What word would you like to look up?</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="search"
							autoFocus={true}
							onChange={updateKeyword}
							defaultValue={props.defaultKeyword}
						></input>
					</form>
					<div className="hint">
						suggested words: forest, dog, party, car, day...
					</div>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
