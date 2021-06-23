import { Workspace } from "@rbxts/services";
import { t } from "@rbxts/t";
import { LabVector2 } from "shared/LabVector2";

type Vector2RenderOpts = {
	z?: number;
	color?: Color3;
};

export const RED = new Color3(1, 0, 0);
export const GREEN = new Color3(0, 1, 0);
export const BLUE = new Color3(0, 0, 1);

const PART = new Instance("Part");
PART.Color = RED;
PART.CanCollide = false;
PART.Anchored = true;

const createPart = () => PART.Clone();

const render = (part: Part) => {
	part.Parent = Workspace;
};

export const renderVector2 = (vector: Vector2, opts: Vector2RenderOpts = {}) => {
	const part = createPart();
	const v = vector;
	const color = opts.color || RED;
	const z = t.number(opts.z) ? opts.z : 0;

	part.Color = color;
	part.Size = new Vector3(0.1, 0.1, v.Magnitude);
	part.CFrame = CFrame.lookAt(new Vector3(0, 0, z), new Vector3(v.X, v.Y, z)).ToWorldSpace(
		new CFrame(0, 0, -v.Magnitude / 2),
	);

	render(part);
};

export const renderLabVector2 = (vector: LabVector2, opts: Vector2RenderOpts = {}) => {
	renderVector2(vector.toRbx(), opts);
};
