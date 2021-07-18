import { Colors, render, RenderType } from "shared/rendering";

const createRenderGroup = (offset: Vector3) => (text: string, vector3: Vector3, color: Color3) => {
	render({ type: RenderType.Vector3, text, offset, vector3, color });
};

const renderGroupFactory = (initialOffset: Vector3, deltaOffset: Vector3) => {
	let offset = initialOffset;
	return () => {
		const currOffset = offset;
		offset = offset.add(deltaOffset);
		return createRenderGroup(currOffset);
	};
};

const nextRenderGroup = renderGroupFactory(new Vector3(0, 5, 10), new Vector3(10, 0, 0));

const A = new Vector3(1, 1, 1);
const B = new Vector3(2, -3, 4);

const r1 = nextRenderGroup();
r1("A", A, Colors.RED);
r1("B", B, Colors.BLUE);
r1("A+B", A.add(B), Colors.GREEN);

const r2 = nextRenderGroup();
r2("A", A, Colors.RED);
r2("B", B, Colors.BLUE);
r2("-B", B.mul(-1), new Color3(0, 1, 0.87));
r2("A-B", A.sub(B), Colors.GREEN);

const r3 = nextRenderGroup();
r3("A", A, Colors.WHITE);
r3("A unit", A.Unit, Colors.RED);

const r4 = nextRenderGroup();
r4("A", A, Colors.RED);
r4("B", B, Colors.BLUE);
r4("A.Cross(B)", A.Cross(B), Colors.WHITE);

const r5 = nextRenderGroup();
r5("A", A, Colors.RED);
r5("B", B, Colors.BLUE);
r5("A.Lerp(B, 0.1)", A.Lerp(B, 0.1), Colors.GREEN);
r5("A.Lerp(B, 0.5)", A.Lerp(B, 0.5), Colors.GREEN);
r5("A.Lerp(B, 1.5)", A.Lerp(B, 1.5), Colors.GREEN);
