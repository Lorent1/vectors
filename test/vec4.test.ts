import { randomInt } from "crypto";
import { vec4, clamp } from "../src/vectors";

describe("vec4", () =>{
  let a = randomInt(100);
  let b = randomInt(100);
  let c = randomInt(100);
  let d = randomInt(100);
  let e = randomInt(100);
  let f = randomInt(100);
  let g = randomInt(100);
  let h = randomInt(100);
  let t = 100.0/randomInt(100);

  let test_vec1 = new vec4(a, b, c, d);
  let test_vec2 = new vec4(e, f, g, h);

  it("vec4", () => {
    expect(vec4.add(test_vec1, test_vec2)).toStrictEqual(new vec4(a + e, b + f, c + g, d + h));
    expect(vec4.add(test_vec1, d)).toStrictEqual(new vec4(a + d, b + d, c + d, d + d));
    expect(vec4.add(a, test_vec2)).toStrictEqual(new vec4(a + e, a + f, a + g, a + h));
  });

  it("vec4", () => {
    expect(vec4.sub(test_vec1, test_vec2)).toStrictEqual(new vec4(a - e, b - f, c - g, d - h));
    expect(vec4.sub(test_vec1, d)).toStrictEqual(new vec4(a - d, b - d, c - d, d - d));
    expect(vec4.sub(a, test_vec2)).toStrictEqual(new vec4(a - e, a - f, a - g, a - h));
  });

  it("vec4", () => {
    expect(vec4.mul(test_vec1, test_vec2)).toStrictEqual(new vec4(a * e, b * f, c * g, d * h));
    expect(vec4.mul(test_vec1, d)).toStrictEqual(new vec4(a * d, b * d, c * d, d * d));
    expect(vec4.mul(a, test_vec2)).toStrictEqual(new vec4(a * e, a * f, a * g, a * h));
  });

  it("div", () => {
    expect(vec4.div(test_vec1, test_vec2)).toStrictEqual(new vec4(a / e, b / f, c / g, d / h));
    expect(vec4.div(test_vec1, d)).toStrictEqual(new vec4(a / d, b / d, c / d, d / d));
    expect(vec4.div(a, test_vec2)).toStrictEqual(new vec4(a / e, a / f, a / g, a / h));
  });

  it("greater", () => {
    expect(vec4.greater(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a > e), +(b > f), +(c > g), +(d > h)));
  });

  it("less", () => {
    expect(vec4.less(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a < e), +(b < f), +(c < g), +(d < h)));
  });

  it("greaterOrEqual", () => {
    expect(vec4.greaterOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a >= e), +(b >= f), +(c >= g), +(d >= h)));
  });

  it("lessOrEqual", () => {
    expect(vec4.lessOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a <= e), +(b <= f), +(c <= g), +(d <= h)));
  });

  it("equal", () => {
    expect(vec4.equal(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a == e), +(b == f), +(c == g), +(d == h)));
  });

  it("notEqual", () => {
    expect(vec4.notEqual(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a != e), +(b != f), +(c != g), +(d != h)));
  });

  it("min", () => {
    expect(vec4.min(test_vec1, test_vec2)).toStrictEqual(new vec4(Math.min(a, e), Math.min(b, f), Math.min(c, g), Math.min(d, h)));
  });

  it("max", () => {
    expect(vec4.max(test_vec1, test_vec2)).toStrictEqual(new vec4(Math.max(a, e), Math.max(b, f), Math.max(c, g), Math.max(d, h)));
  });

  it("clampVec", () => {
    expect(vec4.clamp(test_vec1, test_vec2, new vec4(a + e, b + f, c + g, d + h)))
    .toStrictEqual(new vec4(clamp(a, e, a + e), clamp(b, f, b + f),  clamp(c, g, c + g), clamp(d, h, d+ h)));
    expect(vec4.clamp(test_vec1, e, f)).toStrictEqual(new vec4(clamp(a, e, f), clamp(b, e, f), clamp(c, e, f), clamp(d, e, f)));
  });

  it("abs", () => {
    expect(vec4.abs(test_vec1)).toStrictEqual(new vec4(Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d)));
  });

  it("lerp", () => {
    expect(vec4.lerp(test_vec1, test_vec2, t)).toStrictEqual(new vec4(a + t * (e - a), b + t * (f - b), c + t * (g - c), d + t * (h - d)));
  });

  it("mix", () => {
    expect(vec4.mix(test_vec1, test_vec2, t)).toStrictEqual(new vec4(a + t * (e - a), b + t * (f - b), c + t * (g - c), d + t * (h - d)));
  });

  it("sqrt", () => {
    expect(vec4.sqrt(test_vec1)).toStrictEqual(new vec4(Math.sqrt(a), Math.sqrt(b), Math.sqrt(c), Math.sqrt(d)));
  });

  it("dot", () => {
    expect(vec4.dot(test_vec1, test_vec2)).toStrictEqual(a * e + b * f + c * g + d * h);
  });

  it("length", () => {
    expect(vec4.lengthVec(test_vec1)).toStrictEqual(Math.sqrt(vec4.dot(test_vec1, test_vec1)));
  });

  it("normalize", () => {
    let lenInv = 1.0/vec4.lengthVec(test_vec1);
    expect(vec4.normalize(test_vec1)).toStrictEqual(vec4.mul(test_vec1, lenInv));
  });
});