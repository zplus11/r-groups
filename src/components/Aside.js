import { useState } from "react";

function Aside(props) {
	const [formData, setFormData] = useState({
		selectedOption: "addg",
		numberValue: 3,
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: name === "numberValue" ? Number(value) : value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.onSubmit(formData);
	};

	return (
		<aside className={`${props.isSidebarOpen ? "show" : ""}`}>
		<p>This work is an extract of <strong>MGroups</strong> translated to Javascript and handled on the front-end using React. It is a work in progress.</p>
		<p>Below, select the group you wish to explore:</p>
		<form onSubmit={handleSubmit}>
		<label>
		<select
		name="selectedOption"
		value={formData.selectedOption}
		onChange={handleChange}
		>
		<option value="addg">Choose...</option>
		<option value="addg">Addition Modulo</option>
		<option value="mulg">Multiplication Modulo</option>
		<option value="dihg">Dihedral</option>
		<option value="kl4g">Klein 4</option>
		<option value="quag">Quaternions</option>
		</select>
		</label>
		<p>and the corresponding order/<i>n</i> for this group:</p>
		<label>
		<input
		type="number"
		name="numberValue"
		value={formData.numberValue}
		onChange={handleChange}
		/>
		</label>
		<br/>
		<button type="submit">Submit</button>
		</form>
		</aside>
	);
}

export default Aside;
