import { t } from "@rbxts/t";

export class Renderer {
	static cache: Renderer | undefined;

	static getInstance(): Renderer {
		if (t.nil(Renderer.cache)) {
			Renderer.cache = new Renderer();
		}
		return Renderer.cache;
	}

	private constructor() {}
}
