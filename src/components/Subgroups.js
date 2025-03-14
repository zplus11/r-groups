function Subgroups(props) {
	return (
		<div className="subgroups">
		<h4>Subgroups</h4>
		<ol>
		{props.subgroups.map((sub, index) => <li key={index}>{sub.members.join(", ")}</li>)}
		</ol>
		</div>
	);
}

export default Subgroups;
