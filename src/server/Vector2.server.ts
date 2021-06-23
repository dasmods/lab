import { Colors, render, RenderType } from "shared/rendering";

const createRenderGroup = (offset: Vector3) => (text: string, vector2: Vector2, color: Color3) => {
	render({ type: RenderType.Vector2, text, offset, vector2, color });
};

const A = new Vector2(1, 5);
const B = new Vector2(3, -2);

const r1 = createRenderGroup(new Vector3(0, 5, 0));
r1("A", A, Colors.RED);
r1("B", B, Colors.BLUE);
r1("A+B", A.add(B), Colors.GREEN);

const r2 = createRenderGroup(new Vector3(10, 5, 0));
r2("A", A, Colors.RED);
r2("B", B, Colors.BLUE);
r2("-B", B.mul(-1), new Color3(0, 1, 0.87));
r2("A-B", A.sub(B), Colors.GREEN);
