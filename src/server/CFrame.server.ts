import { Colors, render, RenderType } from "shared/rendering";

const createRenderGroup = (offset: Vector3) => (text: string, cframe: CFrame, color: Color3) => {
	// Render axes
	render({
		type: RenderType.Vector3,
		text: "X",
		offset,
		color: Colors.RED,
		vector3: new Vector3(5, 0, 0),
	});
	render({
		type: RenderType.Vector3,
		text: "Y",
		offset,
		color: Colors.GREEN,
		vector3: new Vector3(0, 5, 0),
	});
	render({
		type: RenderType.Vector3,
		text: "Z",
		offset,
		color: Colors.BLUE,
		vector3: new Vector3(0, 0, 5),
	});

	// Render CFrame
	render({ type: RenderType.CFrame, text, offset, cframe, color });
};

const renderGroupFactory = (initialOffset: Vector3, deltaOffset: Vector3) => {
	let offset = initialOffset;
	return () => {
		const currOffset = offset;
		offset = offset.add(deltaOffset);
		return createRenderGroup(currOffset);
	};
};

let nextRenderGroup = renderGroupFactory(new Vector3(0, 5, 25), new Vector3(20, 0, 0));

const A = new CFrame(0, 0, 0);
const B = new CFrame(5, 5, 5).mul(CFrame.Angles(math.rad(45), 0, math.rad(45)));

const r1 = nextRenderGroup();
r1("A", A, Colors.RED);
r1("B", B, Colors.BLUE);
r1("CFrame.lookAt(A.Position, B)", CFrame.lookAt(A.Position, B.Position), Colors.GREEN);

const r2 = nextRenderGroup();
r2("A", A, Colors.RED);
r2("B", B, Colors.BLUE);

const r3 = nextRenderGroup();
r3("A.ToWorldSpace(B)", A.ToWorldSpace(B), Colors.GREEN);
r3("A", A, Colors.RED);
r3("A.add(new Vector3(3, 1, 2))", A.add(new Vector3(3, 1, 2)), Colors.RED);
r3("B.ToWorldSpace(A)", B.ToWorldSpace(A.add(new Vector3(3, 1, 2))), Colors.WHITE);

nextRenderGroup = renderGroupFactory(new Vector3(0, 5, 50), new Vector3(20, 0, 0));

const r5 = nextRenderGroup();
r5("A", A, Colors.RED);
r5("A.ToWorldSpace(new CFrame(0, 5, 0))", A.ToWorldSpace(new CFrame(0, 5, 0)), Colors.WHITE);
