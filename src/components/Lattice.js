import hasse from "../utils/hasse.js";


function Lattice(props) {
	let subgroups = props.subgroups;
	let pairs = subgroups.flatMap(a => subgroups.map(b => ([a, b]))).filter(
		pair => pair[1].subgroupQ(pair[0].members)
	);

	return (
		<div className="lattice">
		<h4>Subgroups Lattice</h4>
		{pairs.map(([a, b], index) => (
			<div key={index}>{`{${a.members}} of {${b.members}}`}</div>
		))}
		</div>
	);
}

export default Lattice;
