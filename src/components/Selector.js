import { useState } from "react";

function Selector(props) {
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
		<form onSubmit={handleSubmit}>
		{/* Dropdown */}
		<label>
		<span>Select an Option:</span>
		<select
		name="selectedOption" // Match state key
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

		{/* Number Input */}
		<label>
		<span>Selection corresponding variable</span>
		<input
		type="number"
		name="numberValue"
		value={formData.numberValue}
		onChange={handleChange}
		/>
		</label>

		<button type="submit">Submit</button>
		</form>
	);
}

export default Selector;
