import k from "../kaplayCtx";

export function makeMotobug(pos) {
  return k.add([
    k.sprite("motobug", { anim: "run" }),
    k.area({ shape: new k.Rect(k.vec2(-5, 0), 32, 32) }),
    k.scale(4),
    k.anchor("center"),
    k.pos(pos),
    k.offscreen(),
    "enemy",
  ]);
}