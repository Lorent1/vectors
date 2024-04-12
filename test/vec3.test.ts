import { randomInt } from "crypto";
import { vec3, clamp } from "../src/vectors";


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
  
    it("vec3", () => {
      let v: vec3 = vec3.add(new vec3(a, b, c), new vec3(d, e, f));
      expect(vec3.add(test_vec1, test_vec2)).toStrictEqual(new vec3(a + d, b + e, c + f));
      expect(vec3.add(test_vec1, d)).toStrictEqual(new vec3(a + d, b + d, c + d));
      expect(vec3.add(a, test_vec2)).toStrictEqual(new vec3(a + d, a + e, a + f));
    });
  
    it("vec3", () => {
      expect(vec3.sub(test_vec1, test_vec2)).toStrictEqual(new vec3(a - d, b - e, c - f));
      expect(vec3.sub(test_vec1, d)).toStrictEqual(new vec3(a - d, b - d, c - d));
      expect(vec3.sub(a, test_vec2)).toStrictEqual(new vec3(a - d, a - e, a - f));
    });
  
    it("vec3", () => {
      expect(vec3.mul(test_vec1, test_vec2)).toStrictEqual(new vec3(a * d, b * e, c * f));
      expect(vec3.mul(test_vec1, d)).toStrictEqual(new vec3(a * d, b * d, c * d));
      expect(vec3.mul(a, test_vec2)).toStrictEqual(new vec3(a * d, a * e, a * f));
    });
  
    it("vec3", () => {
      expect(vec3.div(test_vec1, test_vec2)).toStrictEqual(new vec3(a / d, b / e, c / f));
      expect(vec3.div(test_vec1, d)).toStrictEqual(new vec3(a / d, b / d, c / d));
      expect(vec3.div(a, test_vec2)).toStrictEqual(new vec3(a / d, a / e, a / f));
    });
  
    it("greater", () => {
      expect(vec3.greater(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a > d), +(b > e), +(c > f)));
    });
  
    it("less", () => {
      expect(vec3.less(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a < d), +(b < e), +(c < f)));
    });
  
    it("greaterOrEqual", () => {
      expect(vec3.greaterOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a >= d), +(b >= e), +(c >= f)));
    });
  
    it("lessOrEqual", () => {
      expect(vec3.lessOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a <= d), +(b <= e), +(c <= f)));
    });
  
    it("equal", () => {
      expect(vec3.equal(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a == d), +(b == e), +(c == f)));
    });
  
    it("notEqual", () => {
      expect(vec3.notEqual(test_vec1, test_vec2)).toStrictEqual(new vec3(+(a != d), +(b != e), +(c != f)));
    });
  
    it("min", () => {
      expect(vec3.min(test_vec1, test_vec2)).toStrictEqual(new vec3(Math.min(a, d), Math.min(b, e), Math.min(c, f)));
    });
  
    it("max", () => {
      expect(vec3.max(test_vec1, test_vec2)).toStrictEqual(new vec3(Math.max(a, d), Math.max(b, e), Math.max(c, f)));
    });
  
    it("clampVec", () => {
      expect(vec3.clamp(test_vec1, test_vec2, new vec3(a + d, b + e, c + f))).toStrictEqual(new vec3(clamp(a, d, a + d), clamp(b, e, b + e),  clamp(c, f, c + f)));
      expect(vec3.clamp(test_vec1, e, f)).toStrictEqual(new vec3(clamp(a, e, f), clamp(b, e, f), clamp(c, e, f)));
    });
  
    it("abs", () => {
      expect(vec3.abs(test_vec1)).toStrictEqual(new vec3(Math.abs(a), Math.abs(b), Math.abs(c)));
    });
  
    it("lerp", () => {
      expect(vec3.lerp(test_vec1, test_vec2, t)).toStrictEqual(new vec3(a + t * (d - a), b + t * (e - b), c + t * (f - c)));
    });
  
    it("mix", () => {
      expect(vec3.mix(test_vec1, test_vec2, t)).toStrictEqual(new vec3(a + t * (d - a), b + t * (e - b), c + t * (f - c)));
    });
  
    it("sqrt", () => {
      expect(vec3.sqrt(test_vec1)).toStrictEqual(new vec3(Math.sqrt(a), Math.sqrt(b), Math.sqrt(c)));
    });
  
    it("dot", () => {
      expect(vec3.dot(test_vec1, test_vec2)).toStrictEqual(a * d + b * e + c * f);
    });
  
    it("length", () => {
      expect(vec3.lengthVec(test_vec1)).toStrictEqual(Math.sqrt(vec3.dot(test_vec1, test_vec1)));
    });
  
    it("normalize", () => {
      let lenInv = 1.0/vec3.lengthVec(test_vec1);
      expect(vec3.normalize(test_vec1)).toStrictEqual(vec3.mul(test_vec1, lenInv));
    });
  })