/* eslint-disable @typescript-eslint/no-this-alias */
export class LabVector2 {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	toRbx(): Vector2 {
		return new Vector2(this.x, this.y);
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

	mul(vector: LabVector2): LabVector2 {}

	magnitude(): number {
		const v = this;
		return math.sqrt(v.x ** 2 + v.y ** 2);
	}

	/**
	 * To find a unit vector with the same direction as
	 * the vector, we divide the vector by its magnitude.
	 * https://byjus.com/maths/unit-vector/
	 */
	unit(): LabVector2 {}
}
