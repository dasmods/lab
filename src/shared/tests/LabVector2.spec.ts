/// <reference types="@rbxts/testez/globals" />

import { LabVector2 } from "shared/LabVector2";

export = () => {
	describe("constructor", () => {
		it("creates a vector with x and y", () => {
			const l = new LabVector2(1, 2);

			expect(l.x).to.be.equal(1);
			expect(l.y).to.be.equal(2);
		});
	});

	describe("toRbx", () => {
		it("creates a Vector2 instance", () => {
			const l = new LabVector2(1, 1);
			const r = l.toRbx();

			expect(l.x).to.be.equal(r.X);
			expect(l.y).to.be.equal(r.Y);
		});
	});

	describe("add", () => {
		it("adds two vectors", () => {
			const v1 = new LabVector2(1, 1);
			const v2 = new LabVector2(2, 3);

			const v3 = v1.add(v2);

			expect(v3.x).to.be.equal(3);
			expect(v3.y).to.be.equal(4);
		});

		it("mimics rbx", () => {
			const l1 = new LabVector2(4, 4);
			const l2 = new LabVector2(1, 2);
			const r1 = new Vector2(4, 4);
			const r2 = new Vector2(1, 2);

			const l3 = l1.add(l2);
			const r3 = r1.add(r2);

			expect(l3.x).to.be.equal(r3.X);
			expect(l3.y).to.be.equal(r3.Y);
		});
	});

	describe("mul", () => {
		it("multiplies vectors", () => {
			const v1 = new LabVector2(1, 2);
			const v2 = new LabVector2(2, 3);

			const v3 = v1.mul(v2);

			expect(v3.x).to.be.equal(2);
			expect(v3.y).to.be.equal(6);
		});

		it("mimics rbx", () => {
			const l1 = new LabVector2(1, 2);
			const l2 = new LabVector2(2, 3);
			const r1 = new Vector2(1, 2);
			const r2 = new Vector2(2, 3);

			const l3 = l1.mul(l2);
			const r3 = r1.mul(r2);

			expect(l3.x).to.be.equal(r3.X);
			expect(l3.y).to.be.equal(r3.Y);
		});
	});

	describe("dot", () => {
		it("mimics rbx", () => {
			const l1 = new LabVector2(1, 2);
			const l2 = new LabVector2(2, 3);
			const r1 = new Vector2(1, 2);
			const r2 = new Vector2(2, 3);

			const l3 = l1.dot(l2);
			const r3 = r1.Dot(r2);

			expect(l3).to.be.equal(r3);
		});
	});

	describe("cross", () => {
		it("mimics rbx", () => {
			const l1 = new LabVector2(1, 2);
			const l2 = new LabVector2(2, 3);
			const r1 = new Vector2(1, 2);
			const r2 = new Vector2(2, 3);

			const l3 = l1.cross(l2);
			const r3 = r1.Cross(r2);

			expect(l3).to.be.equal(r3);
		});
	});

	describe("div", () => {
		it("mimics rbx with vectors", () => {
			const l1 = new LabVector2(4, 4);
			const l2 = new LabVector2(2, 2);
			const r1 = l1.toRbx();
			const r2 = l2.toRbx();

			const l3 = l1.div(l2);
			const r3 = r1.div(r2);

			expect(l3.x).to.be.equal(r3.X);
			expect(l3.y).to.be.equal(r3.Y);
		});

		it("mimics rbx with numbers", () => {
			const l1 = new LabVector2(4, 4);
			const r1 = l1.toRbx();

			const l2 = l1.div(2);
			const r2 = r1.div(2);

			expect(l2.x).to.be.equal(r2.X);
			expect(l2.y).to.be.equal(r2.Y);
		});
	});

	describe("unit", () => {
		it("mimics rbx", () => {
			const l1 = new LabVector2(4, 4);
			const r1 = l1.toRbx();

			const l2 = l1.unit();
			const r2 = r1.Unit;

			expect(l2.x).to.be.near(r2.X);
			expect(l2.y).to.be.near(r2.Y);
		});
	});
};
