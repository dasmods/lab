import { LabVector2 } from "shared/LabVector2";
import { BLUE, GREEN, RED, renderLabVector2, renderVector2 } from "shared/rendering";

// LabVector2
const opts1 = { color: RED };
renderLabVector2(new LabVector2(4, 7), opts1);
renderLabVector2(new LabVector2(4, 15), opts1);
renderLabVector2(new LabVector2(3, 6), opts1);
renderLabVector2(new LabVector2(-4, 7), opts1);
renderLabVector2(new LabVector2(-4, 15), opts1);
renderLabVector2(new LabVector2(-3, 6), opts1);
renderLabVector2(new LabVector2(0, 15), { ...opts1, color: GREEN });

// Vector2
const opts2 = { z: 5, color: BLUE };
renderVector2(new Vector2(4, 7), opts2);
renderVector2(new Vector2(4, 15), opts2);
renderVector2(new Vector2(3, 6), opts2);
renderVector2(new Vector2(-4, 7), opts2);
renderVector2(new Vector2(-4, 15), opts2);
renderVector2(new Vector2(-3, 6), opts2);
renderVector2(new Vector2(0, 15), { ...opts2, color: GREEN });
