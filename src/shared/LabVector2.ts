import { t } from "@rbxts/t";

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

	mul(value: LabVector2 | number): LabVector2 {
		return t.number(value) ? this.scalarProduct(value) : this.dotProduct(value);
	}

	private scalarProduct(scalar: number): LabVector2 {
		const v = this;

		const x = v.x * scalar;
		const y = v.y * scalar;

		return new LabVector2(x, y);
	}

	/**
	 * The dot product of 2 vectors is the magnitude of one times
	 * the project of the second onto the first.
	 * https://physics.info/vector-multiplication/
	 */
	private dotProduct(vector: LabVector2): LabVector2 {
		const v1 = this;
		const v2 = vector;
		return this;
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
