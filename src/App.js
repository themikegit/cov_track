import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { Provider } from "./Context";

function App() {
	return (
		<Provider>
			<div className="App">
				<Header />
				<Body />
			</div>
		</Provider>
	);
}

export default App;
