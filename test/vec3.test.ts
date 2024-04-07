import { randomInt } from "crypto";
import { vec3, abs, clamp, dot, greater, length, lerp, less, lessOrEqual, max, min, mix, mul, normalize, notEqual, sqrt, equal, add, sub, div, greaterOrEqual, clampVec} from "../src/vectors";


describe("vec3", () =>{
    let a = randomInt(100);
    let b = randomInt(100);
    let c = randomInt(100);
    let d = randomInt(100);
    let e = randomInt(100);
    let f = randomInt(100);
    let t = 100.0/randomInt(100);
  
    let test_vec1 = new vec3(a, b, c);
    let test_vec2 = new vec3(d, e, f);
  
    it("add", () => {
      expect(add(test_vec1, test_vec2)).toStrictEqual(new vec3(a + d, b + e, c + f));
      expect(add(test_vec1, d)).toStrictEqual(new vec3(a + d, b + d, c + d));
      expect(add(a, test_vec2)).toStrictEqual(new vec3(a + d, a + e, a + f));
    });
  
    it("sub", () => {
      expect(sub(test_vec1, test_vec2)).toStrictEqual(new vec3(a - d, b - e, c - f));
      expect(sub(test_vec1, d)).toStrictEqual(new vec3(a - d, b - d, c - d));
      expect(sub(a, test_vec2)).toStrictEqual(new vec3(a - d, a - e, a - f));
    });
  
    it("mul", () => {
      expect(mul(test_vec1, test_vec2)).toStrictEqual(new vec3(a * d, b * e, c * f));
      expect(mul(test_vec1, d)).toStrictEqual(new vec3(a * d, b * d, c * d));
      expect(mul(a, test_vec2)).toStrictEqual(new vec3(a * d, a * e, a * f));
    });
  
    it("div", () => {
      expect(div(test_vec1, test_vec2)).toStrictEqual(new vec3(a / d, b / e, c / f));
      expect(div(test_vec1, d)).toStrictEqual(new vec3(a / d, b / d, c / d));
      expect(div(a, test_vec2)).toStrictEqual(new vec3(a / d, a / e, a / f));
    });
  
    it("greater", () => {
      expect(greater(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a > d), +(b > e), +(c > f)));
    });
  
    it("less", () => {
      expect(less(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a < d), +(b < e), +(c < f)));
    });
  
    it("greaterOrEqual", () => {
      expect(greaterOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a >= d), +(b >= e), +(c >= f)));
    });
  
    it("lessOrEqual", () => {
      expect(lessOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a <= d), +(b <= e), +(c <= f)));
    });
  
    it("equal", () => {
      expect(equal(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a == d), +(b == e), +(c == f)));
    });
  
    it("notEqual", () => {
      expect(notEqual(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a != d), +(b != e), +(c != f)));
    });
  
    it("min", () => {
      expect(min(test_vec1, test_vec2)).toStrictEqual(new vec3(Math.min(a, d), Math.min(b, e), Math.min(c, f)));
    });
  
    it("max", () => {
      expect(max(test_vec1, test_vec2)).toStrictEqual(new vec3(Math.max(a, d), Math.max(b, e), Math.max(c, f)));
    });
  
    it("clampVec", () => {
      expect(clampVec(test_vec1, test_vec2, new vec3(a + d, b + e, c + f))).toStrictEqual(new vec3(clamp(a, d, a + d), clamp(b, e, b + e),  clamp(c, f, c + f)));
      expect(clampVec(test_vec1, e, f)).toStrictEqual(new vec3(clamp(a, e, f), clamp(b, e, f), clamp(c, e, f)));
    });
  
    it("abs", () => {
      expect(abs(test_vec1)).toStrictEqual(new vec3(Math.abs(a), Math.abs(b), Math.abs(c)));
    });
  
    it("lerp", () => {
      expect(lerp(test_vec1, test_vec2, t)).toStrictEqual(new vec3(a + t * (d - a), b + t * (e - b), c + t * (f - c)));
    });
  
    it("mix", () => {
      expect(mix(test_vec1, test_vec2, t)).toStrictEqual(new vec3(a + t * (d - a), b + t * (e - b), c + t * (f - c)));
    });
  
    it("sqrt", () => {
      expect(sqrt(test_vec1)).toStrictEqual(new vec3(Math.sqrt(a), Math.sqrt(b), Math.sqrt(c)));
    });
  
    it("dot", () => {
      expect(dot(test_vec1, test_vec2)).toStrictEqual(a * d + b * e + c * f);
    });
  
    it("length", () => {
      expect(length(test_vec1)).toStrictEqual(Math.sqrt(dot(test_vec1, test_vec1)));
    });
  
    it("normalize", () => {
      let lenInv = 1.0/length(test_vec1);
      expect(normalize(test_vec1)).toStrictEqual(div(test_vec1, lenInv));
    });
  })