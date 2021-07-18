import { Colors, render, RenderType } from "shared/rendering";

const createRenderGroup = (offset: Vector3) => (text: string, cframe: CFrame, color: Color3) => {
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

const nextRenderGroup = renderGroupFactory(new Vector3(0, 5, 25), new Vector3(10, 0, 0));

const A = new CFrame(0, 0, 0);
const B = new CFrame(5, 5, 5);

const r1 = nextRenderGroup();
r1("A", A, Colors.RED);
r1("B", B, Colors.BLUE);
r1("CFrame.lookAt(A.Position, B)", CFrame.lookAt(A.Position, B.Position), Colors.GREEN);
