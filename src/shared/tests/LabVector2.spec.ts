/// <reference types="@rbxts/testez/globals" />

import { LabVector2 } from "shared/LabVector2";

export = () => {
	describe("constructor", () => {
		it("creates a vector with x and y", () => {
			const v = new LabVector2(1, 2);

			expect(v.x).equal(1);
			expect(v.y).equal(2);
		});
	});

	describe("toRbx", () => {
		it("creates a Vector2 instance", () => {
			const lv = new LabVector2(1, 1);
			const rv = lv.toRbx();

			expect(lv.x).equal(rv.X);
			expect(lv.y).equal(rv.Y);
		});
	});

	describe("add", () => {
		it("adds two vectors", () => {
			const v1 = new LabVector2(1, 1);
			const v2 = new LabVector2(2, 3);

			const v3 = v1.add(v2);

			expect(v3.x).equal(3);
			expect(v3.y).equal(4);
		});

		it("mimics rbx", () => {
			const lv1 = new LabVector2(4, 4);
			const lv2 = new LabVector2(1, 2);
			const lv3 = lv1.add(lv2);

			const rv1 = new Vector2(4, 4);
			const rv2 = new Vector2(1, 2);
			const rv3 = rv1.add(rv2);

			expect(lv3.x).equal(rv3.X);
			expect(lv3.y).equal(rv3.Y);
		});
	});

	describe("mul", () => {
		it("multiplies vectors", () => {
			const v1 = new LabVector2(1, 2);
			const v2 = new LabVector2(2, 3);

			const v3 = v1.mul(v2);

			expect(v3.x).equal(2);
			expect(v3.y).equal(6);
		});

		it("mimics rbx", () => {
			const l1 = new LabVector2(1, 2);
			const l2 = new LabVector2(2, 3);
			const l3 = l1.mul(l2);

			const r1 = new Vector2(1, 2);
			const r2 = new Vector2(2, 3);
			const r3 = r1.mul(r2);

			expect(l3.x).equal(r3.X);
			expect(l3.y).equal(r3.Y);
		});
	});

	describe("dot", () => {
		it("mimics rbx", () => {
			const l1 = new LabVector2(1, 2);
			const l2 = new LabVector2(2, 3);
			const lDotProduct = l1.dot(l2);

			const r1 = new Vector2(1, 2);
			const r2 = new Vector2(2, 3);
			const rDotProduct = r1.Dot(r2);

			expect(lDotProduct).equal(rDotProduct);
		});
	});

	describe("cross", () => {
		it("mimics rbx", () => {
			const l1 = new LabVector2(1, 2);
			const l2 = new LabVector2(2, 3);
			const lCrossProduct = l1.cross(l2);

			const r1 = new Vector2(1, 2);
			const r2 = new Vector2(2, 3);
			const rCrossProduct = r1.Cross(r2);

			expect(lCrossProduct).equal(rCrossProduct);
		});
	});
};
