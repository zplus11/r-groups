import "./App.css";
import { useState } from "react";

import NavBar from "./components/NavBar.js";
import Aside from "./components/Aside.js";
import Properties from "./components/Properties.js";
import Cayley from "./components/Cayley.js";
import Subgroups from "./components/Subgroups.js";
import Lattice from "./components/Lattice.js";
import Footer from "./components/Footer.js";

import {additiveGroup, multiplicativeGroup} from "./utils/group.js";


function App() {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	function toggleSidebar() {
		setIsSidebarOpen(!isSidebarOpen);
	};

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
			default:
				return additiveGroup(optionNumber);
		}
	}

	let grp = getGroup(optionGroup, optionNumber);
	let subs = grp.subgroups();

	return (
		<div className="App">
		<div className="wrapper">
		<NavBar toggleSidebar={toggleSidebar} />
		<Aside onSubmit={handleFormSubmit} isSidebarOpen={isSidebarOpen} />
		<main>
		<Properties group={grp} subgroups={subs} />
		<Cayley group={grp} />
		<Subgroups subgroups={subs} />
		<Lattice subgroups={subs} />
		</main>
		<Footer />
		</div>
		</div>
	);

}

export default App;
