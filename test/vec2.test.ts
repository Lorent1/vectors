import { randomInt } from "crypto";
import { vec2, abs, clamp, dot, greater, length, lerp, less, lessOrEqual, max, min, mix, mul, normalize, notEqual, sqrt, equal, add, sub, div, greaterOrEqual, clampVec} from "../src/vectors";

describe("vec2", () =>{
    let a = randomInt(255) - 128;
    let b = randomInt(255) - 128;
    let c = randomInt(255) - 128;
    let d = randomInt(255) - 128;
    let t = 100.0/randomInt(100);
  
    let test_vec1 = new vec2(a, b);
    let test_vec2 = new vec2(c, d);
  
    it("add", () => {
      expect(add(test_vec1, test_vec2)).toStrictEqual(new vec2(a + c, b + d));
      expect(add(test_vec1, c)).toStrictEqual(new vec2(a + c, b + c));
      expect(add(a, test_vec2)).toStrictEqual(new vec2(a + c, a + d));
    });
  
    it("sub", () => {
      expect(sub(test_vec1, test_vec2)).toStrictEqual(new vec2(a - c, b - d));
      expect(sub(test_vec1, c)).toStrictEqual(new vec2(a - c, b - c));
      expect(sub(a, test_vec2)).toStrictEqual(new vec2(a - c, a - d));
    });
  
    it("mul", () => {
      expect(mul(test_vec1, test_vec2)).toStrictEqual(new vec2(a * c, b * d));
      expect(mul(test_vec1, c)).toStrictEqual(new vec2(a * c, b * c));
      expect(mul(a, test_vec2)).toStrictEqual(new vec2(a * c, a * d));
    });
  
    it("div", () => {
      expect(div(test_vec1, test_vec2)).toStrictEqual(new vec2(a / c, b / d));
      expect(div(test_vec1, c)).toStrictEqual(new vec2(a / c, b / c));
      expect(div(a, test_vec2)).toStrictEqual(new vec2(a / c, a / d));
    });
  
    it("greater", () => {
      expect(greater(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a > c), +(b > d)));
    });
  
    it("less", () => {
      expect(less(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a < c), +(b < d)));
    });
  
    it("greaterOrEqual", () => {
      expect(greaterOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a >= c), +(b >= d)));
    });
  
    it("lessOrEqual", () => {
      expect(lessOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a <= c), +(b <= d)));
    });
  
    it("equal", () => {
      expect(equal(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a == c), +(b == d)));
    });
  
    it("notEqual", () => {
      expect(notEqual(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a != c), +(b != d)));
    });
  
    it("min", () => {
      expect(min(test_vec1, test_vec2)).toStrictEqual(new vec2(Math.min(a, c), Math.min(b, d)));
    });
  
    it("max", () => {
      expect(max(test_vec1, test_vec2)).toStrictEqual(new vec2(Math.max(a, c), Math.max(b, d)));
    });
  
    it("clampVec", () => {
      expect(clampVec(test_vec1, test_vec2, new vec2(a + b, c + d))).toStrictEqual(new vec2(clamp(a, c, a + b), clamp(b, d, c + d)));
      expect(clampVec(test_vec1, c, d)).toStrictEqual(new vec2(clamp(a, c, d), clamp(b, c, d)));
    });
  
    it("abs", () => {
      expect(abs(test_vec1)).toStrictEqual(new vec2(Math.abs(a), Math.abs(b)));
    });
  
    it("lerp", () => {
      expect(lerp(test_vec1, test_vec2, t)).toStrictEqual(new vec2(a + t * (c - a), b + t * (d - b)));
    });
  
    it("mix", () => {
      expect(mix(test_vec1, test_vec2, t)).toStrictEqual(new vec2(a + t * (c - a), b + t * (d - b)));
    });
  
    it("sqrt", () => {
      expect(sqrt(test_vec1)).toStrictEqual(new vec2(Math.sqrt(a), Math.sqrt(b)));
    });
  
    it("dot", () => {
      expect(dot(test_vec1, test_vec2)).toStrictEqual(a * c + b * d);
    });
  
    it("length", () => {
      expect(length(test_vec1)).toStrictEqual(Math.sqrt(dot(test_vec1, test_vec1)));
    });
  
    it("normalize", () => {
      let lenInv = 1.0/length(test_vec1);
      expect(normalize(test_vec1)).toStrictEqual(div(test_vec1, lenInv));
    });
  })
  
  