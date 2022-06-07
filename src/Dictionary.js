import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState("");

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function searchWord(event) {
		//documentation: https://dictionaryapi.dev/
		let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		event.preventDefault();

		axios.get(apiURL).then(handleResponse);
	}

	function updateKeyword(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<form onSubmit={searchWord}>
				<input type="search" autoFocus={true} onChange={updateKeyword}></input>
			</form>
			<Results results={results} />
		</div>
	);
}
