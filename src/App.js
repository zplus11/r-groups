import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar.js";
import Selector from "./components/Selector.js";
import Cayley from "./components/Cayley.js";
import Footer from "./components/Footer.js";

import {additiveGroup, multiplicativeGroup} from "./utils/group.js";


function App() {

	const [optionGroup, setOptionGroup] = useState("addg");
	const [optionNumber, setOptionNumber] = useState(3);

	const handleFormSubmit = (data) => {
		setOptionGroup(data.selectedOption);
		setOptionNumber(data.numberValue);
	};

	function getGroup(optionGroup, optionNumber) {
		switch (optionGroup) {
			case "addg":
				return additiveGroup(optionNumber);
			case "mulg":
				return multiplicativeGroup(optionNumber);
			case "dihg":
				return additiveGroup(optionNumber);
			case "kl4g":
				return additiveGroup(optionNumber);
			case "qua8":
				return additiveGroup(optionNumber);
		}
	}

	let grp = getGroup(optionGroup, optionNumber);

	return (
		<div className="App">
		<div className="wrapper">
		<NavBar />
		<Selector onSubmit={handleFormSubmit} />
		<Cayley group={grp} />
		This is a work in progress. Extract from <strong>MGroups.</strong>
		<Footer />
		</div>
		</div>
	);

}

export default App;
