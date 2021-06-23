import { Workspace } from "@rbxts/services";

export enum RenderType {
	Vector2 = "Vector2",
}

type Vector2Params = {
	type: RenderType.Vector2;
	vector2: Vector2;
	offset: Vector3;
	color: Color3;
	text: string;
};

export type RenderParams = Vector2Params;

export const Colors = {
	RED: new Color3(1, 0, 0),
	GREEN: new Color3(0, 1, 0),
	BLUE: new Color3(0, 0, 1),
};

export const render = (params: RenderParams) => {
	let part: Part;

	switch (params.type) {
		case RenderType.Vector2:
			part = createVector2Part(params);
			break;
		default:
			error(`unexpected type: ${params.type}`);
	}

	part.Parent = Workspace;
};

const createPart = () => {
	const part = new Instance("Part");
	part.CanCollide = false;
	part.Anchored = true;
	return part;
};

const createVector2Part = (params: Vector2Params) => {
	const { vector2, offset, color, text } = params;

	const magnitude = vector2.Magnitude;
	const p1 = offset;
	const p2 = new Vector3(vector2.X, vector2.Y, 0).add(offset);

	const part = createPart();
	part.Color = color;
	part.Size = new Vector3(0.1, 0.1, magnitude);
	part.CFrame = CFrame.lookAt(p1, p2).ToWorldSpace(new CFrame(0, 0, -magnitude / 2));

	const billboard = new Instance("BillboardGui", part);
	billboard.Adornee = part;
	billboard.Enabled = true;
	billboard.Size = new UDim2(1, 5, 1, 1);
	billboard.AlwaysOnTop = true;

	const textLabel = new Instance("TextLabel", billboard);
	textLabel.Text = text;
	textLabel.Visible = true;
	textLabel.Size = new UDim2(1, 5, 1, 1);
	textLabel.BackgroundTransparency = 1;
	textLabel.TextColor3 = color;
	textLabel.TextXAlignment = Enum.TextXAlignment.Right;

	return part;
};
