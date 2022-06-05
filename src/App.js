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
					<Dictionary />
				</header>
				<footer className="App-footer">Coded by Tisha Brown</footer>
			</div>{" "}
		</div>
	);
}

export default App;
