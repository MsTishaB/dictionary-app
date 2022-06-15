import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
	const [keyword, setKeyword] = useState(props.defaultKeyword);
	const [results, setResults] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function searchWord() {
		//documentation: https://dictionaryapi.dev/
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiURL).then(handleDictionaryResponse);

		const pexelsApiKey =
			"563492ad6f91700001000001cb25a283dce1439885739aa075cd73d3";
		let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		const headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios
			.get(pexelsApiURL, {
				headers: headers,
			})
			.then(handlePexelsResponse);
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
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
