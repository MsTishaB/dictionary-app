import "./App.css";
import SheCodes from "./SheCodes-logo.png";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					<img
						src={SheCodes}
						alt="SheCodes logo"
						className="App-logo img-fluid"
					/>
					<Dictionary defaultKeyword="forest" />
				</header>
				<footer className="App-footer">
					Coded by Tisha Brown and open-sourced on{" "}
					<a
						href="https://github.com/MsTishaB/dictionary-app"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						GitHub
					</a>
				</footer>
			</div>{" "}
		</div>
	);
}

export default App;
