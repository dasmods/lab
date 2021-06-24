/* eslint-disable @typescript-eslint/no-this-alias */
export class LabVector2 {
	static fromRbx(vector: Vector2): LabVector2 {
		const v = vector;
		return new LabVector2(v.X, v.Y);
	}

	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	toRbx(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	eq(vector: LabVector2): boolean {
		const v1 = this;
		const v2 = vector;
		return v1.x === v2.x && v1.y === v2.y;
	}

	add(vector: LabVector2): LabVector2 {
		const v1 = this;
		const v2 = vector;

		const x = v1.x + v2.x;
		const y = v1.y + v2.y;

		return new LabVector2(x, y);
	}

	sub(vector: LabVector2): LabVector2 {
		const v1 = this;
		const v2 = vector;

		const x = v1.x - v2.x;
		const y = v1.y - v2.y;

		return new LabVector2(x, y);
	}

	mul(vector: LabVector2): LabVector2 {
		const v1 = this;
		const v2 = vector;

		const x = v1.x * v2.x;
		const y = v1.y * v2.y;

		return new LabVector2(x, y);
	}

	div(vector: LabVector2): LabVector2 {
		const v1 = this;
		const v2 = vector;

		const x = v1.x / v2.x;
		const y = v1.y / v2.y;

		return new LabVector2(x, y);
	}

	/**
	 * The dot product of 2 vectors is the magnitude of one times
	 * the project of the second onto the first.
	 * https://physics.info/vector-multiplication/
	 */
	dot(vector: LabVector2): number {
		const v1 = this;
		const v2 = vector;
		return v1.x * v2.x + v1.y * v2.y;
	}

	cross(vector: LabVector2): number {
		const v1 = this;
		const v2 = vector;
		// Cross product really returns a vector, but
		// multiplied by k unit vector. This can't be
		// described in 2d, so Roblox returns a number.
		// https://developer.roblox.com/en-us/api-reference/datatype/Vector2
		return v1.x * v2.y - v1.y * v2.x;
	}

	magnitude(): number {
		const v = this;
		return math.sqrt(v.x ** 2 + v.y ** 2);
	}

	/**
	 * To find a unit vector with the same direction as
	 * the vector, we divide the vector by its magnitude.
	 * https://byjus.com/maths/unit-vector/
	 */
	unit(): LabVector2 {
		return this;
	}
}
