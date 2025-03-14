const getAllSubsets = theArray => theArray.reduce(
	(subsets, value) => subsets.concat(
		subsets.map(set => [value,...set])
	),
	[[]]
).slice(1);

function divisors(integer) {
    let result = [];
    for (let i = 1; i <= integer; i++) {
        if (integer % i === 0) {
            result.push(i);
        }
    }
    return result;
}


class group {
	constructor(members, fn, identity) {
		this.members = members;
		this.fn = fn;
		this.identity = identity;
	}

	cayley() {
		return this.members.map(
			(x) => this.members.map(
				(y) => this.fn(x, y)
			)
		);
	}

	repr() {
	}

	raise(x, n) {
		if (n === 0) return this.identity;
		let res = x;
		while (--n > 0) {
			res = this.fn(res, x);
		}
		return res;
	}

	order(x) {
		for (let o of divisors(this.members.length)) {
			if (this.raise(x, o) === this.identity) {
				return o;
			}
		}
	}

	generators() {
		return this.members.filter(
			x => this.order(x) === this.members.length
		);
	}

	abelianQ() {
		for (let x of this.members) {
			for (let y of this.members) {
				if (this.fn(x, y) !== this.fn(y, x)) {
					return false;
				}
			}
		}
		return true;
	}

	subgroupQ(sub) {
		if (this.members.length % sub.length !== 0) {
			return false;
		}
		if (!sub.includes(this.identity)) {
			return false;
		}
		for (let x of sub) {
			for (let y of sub) {
				if (!sub.includes(this.fn(x, y))) {
					return false;
				}
			}
		}
		return true;
	}

	subgroups() {
		return getAllSubsets(this.members).filter(
			sub => this.subgroupQ(sub)
		).map(sub => new group(sub, this.fn, this.identity));
	}
}

export function additiveGroup(n) {
	return new group(
		[...Array(n).keys()],
		(a, b) => (a + b) % n,
		0
	);
}

const gcd = (a,b) => !b ? a : gcd(b,a%b)
export function multiplicativeGroup(n) {
	return new group(
		[...Array(n).keys()].filter(x => gcd(n, x) === 1),
		(a, b) => (a * b) % n,
		1
	);
}
