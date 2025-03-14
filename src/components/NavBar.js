function NavBar(props) {
	return (
		<nav>
		<div>
		<button className="btn" onClick={props.toggleSidebar}>&lt;/&gt;</button>
		<strong>r-groups</strong>
		</div>
		<ul><li><a href="https://github.com/zplus11/r-groups.git" target="_blank">Github</a></li>
		    <li><a href="https://github.com/zplus11/MGroups.git" target="_blank">MGroups</a></li>
		    <li><a href="https://github.com/zplus11" target="_blank">Author</a></li></ul>
		</nav>
	);
}

export default NavBar;
