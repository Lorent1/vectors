import { randomInt } from "crypto";
import { vec4, abs, clamp, dot, greater, length, lerp, less, lessOrEqual, max, min, mix, mul, normalize, notEqual, sqrt, equal, add, sub, div, greaterOrEqual, clampVec} from "../src/vectors";

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

  it("add", () => {
    expect(add(test_vec1, test_vec2)).toStrictEqual(new vec4(a + e, b + f, c + g, d + h));
    expect(add(test_vec1, d)).toStrictEqual(new vec4(a + d, b + d, c + d, d + d));
    expect(add(a, test_vec2)).toStrictEqual(new vec4(a + e, a + f, a + g, a + h));
  });

  it("sub", () => {
    expect(sub(test_vec1, test_vec2)).toStrictEqual(new vec4(a - e, b - f, c - g, d - h));
    expect(sub(test_vec1, d)).toStrictEqual(new vec4(a - d, b - d, c - d, d - d));
    expect(sub(a, test_vec2)).toStrictEqual(new vec4(a - e, a - f, a - g, a - h));
  });

  it("mul", () => {
    expect(mul(test_vec1, test_vec2)).toStrictEqual(new vec4(a * e, b * f, c * g, d * h));
    expect(mul(test_vec1, d)).toStrictEqual(new vec4(a * d, b * d, c * d, d * d));
    expect(mul(a, test_vec2)).toStrictEqual(new vec4(a * e, a * f, a * g, a * h));
  });

  it("div", () => {
    expect(div(test_vec1, test_vec2)).toStrictEqual(new vec4(a / e, b / f, c / g, d / h));
    expect(div(test_vec1, d)).toStrictEqual(new vec4(a / d, b / d, c / d, d / d));
    expect(div(a, test_vec2)).toStrictEqual(new vec4(a / e, a / f, a / g, a / h));
  });

  it("greater", () => {
    expect(greater(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a > e), +(b > f), +(c > g), +(d > h)));
  });

  it("less", () => {
    expect(less(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a < e), +(b < f), +(c < g), +(d < h)));
  });

  it("greaterOrEqual", () => {
    expect(greaterOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a >= e), +(b >= f), +(c >= g), +(d >= h)));
  });

  it("lessOrEqual", () => {
    expect(lessOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a <= e), +(b <= f), +(c <= g), +(d <= h)));
  });

  it("equal", () => {
    expect(equal(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a == e), +(b == f), +(c == g), +(d == h)));
  });

  it("notEqual", () => {
    expect(notEqual(test_vec1, test_vec2)).toStrictEqual(new vec4(+(a != e), +(b != f), +(c != g), +(d != h)));
  });

  it("min", () => {
    expect(min(test_vec1, test_vec2)).toStrictEqual(new vec4(Math.min(a, e), Math.min(b, f), Math.min(c, g), Math.min(d, h)));
  });

  it("max", () => {
    expect(max(test_vec1, test_vec2)).toStrictEqual(new vec4(Math.max(a, e), Math.max(b, f), Math.max(c, g), Math.max(d, h)));
  });

  it("clampVec", () => {
    expect(clampVec(test_vec1, test_vec2, new vec4(a + e, b + f, c + g, d + h)))
    .toStrictEqual(new vec4(clamp(a, e, a + e), clamp(b, f, b + f),  clamp(c, g, c + g), clamp(d, h, d+ h)));
    expect(clampVec(test_vec1, e, f)).toStrictEqual(new vec4(clamp(a, e, f), clamp(b, e, f), clamp(c, e, f), clamp(d, e, f)));
  });

  it("abs", () => {
    expect(abs(test_vec1)).toStrictEqual(new vec4(Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d)));
  });

  it("lerp", () => {
    expect(lerp(test_vec1, test_vec2, t)).toStrictEqual(new vec4(a + t * (e - a), b + t * (f - b), c + t * (g - c), d + t * (h - d)));
  });

  it("mix", () => {
    expect(mix(test_vec1, test_vec2, t)).toStrictEqual(new vec4(a + t * (e - a), b + t * (f - b), c + t * (g - c), d + t * (h - d)));
  });

  it("sqrt", () => {
    expect(sqrt(test_vec1)).toStrictEqual(new vec4(Math.sqrt(a), Math.sqrt(b), Math.sqrt(c), Math.sqrt(d)));
  });

  it("dot", () => {
    expect(dot(test_vec1, test_vec2)).toStrictEqual(a * e + b * f + c * g + d * h);
  });

  it("length", () => {
    expect(length(test_vec1)).toStrictEqual(Math.sqrt(dot(test_vec1, test_vec1)));
  });

  it("normalize", () => {
    let lenInv = 1.0/length(test_vec1);
    expect(normalize(test_vec1)).toStrictEqual(div(test_vec1, lenInv));
  });
});