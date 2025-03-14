function Cayley(props) {
	return (
		<div className="cayley">
		<h4>Cayley Table</h4>
		<table border="1" rules="all">
		<tbody>
		{props.group.cayley().map((row, i) => (
			<tr key={i}>
			{row.map((cell, j) => (
				<td key={j}>{cell}</td>
			))}
			</tr>
		))}
		</tbody>
		</table>
		</div>
	);
}

export default Cayley;
