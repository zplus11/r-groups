class Group {
	constructor(members, fn) {
		this.members = members;
		this.fn = fn;
	}

	apply(a, b) {
		return this.fn(a, b);
	}

	cayley() {
		return this.members.map(
			(x) => this.members.map(
				(y) => this.fn(x, y)
			)
		);
	}
}

export function additiveGroup(n) {
	return new Group(
		[...Array(n).keys()],
		(a, b) => (a + b) % n
	);
}

const gcd = (a,b) => !b ? a : gcd(b,a%b)
export function multiplicativeGroup(n) {
	return new Group(
		[...Array(n).keys()].filter(x => gcd(n, x) == 1),
		(a, b) => (a * b) % n
	);
}
