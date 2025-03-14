function Properties(props) {
	let gens = props.group.generators();

	return (
		<div className="properties">
		<h4>Properties</h4>
		Group Order: {props.group.members.length}<br />
		No. of Subgroups: {props.subgroups.length}<br />
		Abelian: {props.group.abelianQ() ? <>Yes</> : <>No</>}<br />
		{gens && gens.length > 0 ? (
			<>
			Cyclic: Yes<br />
			Generators: {gens.join(", ")}
			</>
		) : (
			<>Cyclic: No</>
		)}
		</div>
	);
}

export default Properties;
