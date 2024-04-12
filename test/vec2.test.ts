import { randomInt } from "crypto";
import {vec2, clamp} from "../src/vectors";

describe("vec2", () =>{
    let a = randomInt(255) - 128;
    let b = randomInt(255) - 128;
    let c = randomInt(255) - 128;
    let d = randomInt(255) - 128;
    let t = 100.0/randomInt(100);
  
    let test_vec1 = new vec2(a, b);
    let test_vec2 = new vec2(c, d);
  
    it("vec2", () => {
      expect(vec2.add(test_vec1, test_vec2)).toStrictEqual(new vec2(a + c, b + d));
      expect(vec2.add(test_vec1, c)).toStrictEqual(new vec2(a + c, b + c));
      expect(vec2.add(a, test_vec2)).toStrictEqual(new vec2(a + c, a + d));
    });
  
    it("vec2", () => {
      expect(vec2.sub(test_vec1, test_vec2)).toStrictEqual(new vec2(a - c, b - d));
      expect(vec2.sub(test_vec1, c)).toStrictEqual(new vec2(a - c, b - c));
      expect(vec2.sub(a, test_vec2)).toStrictEqual(new vec2(a - c, a - d));
    });
  
    it("vec2", () => {
      expect(vec2.mul(test_vec1, test_vec2)).toStrictEqual(new vec2(a * c, b * d));
      expect(vec2.mul(test_vec1, c)).toStrictEqual(new vec2(a * c, b * c));
      expect(vec2.mul(a, test_vec2)).toStrictEqual(new vec2(a * c, a * d));
    });
  
    it("vec2", () => {
      expect(vec2.div(test_vec1, test_vec2)).toStrictEqual(new vec2(a / c, b / d));
      expect(vec2.div(test_vec1, c)).toStrictEqual(new vec2(a / c, b / c));
      expect(vec2.div(a, test_vec2)).toStrictEqual(new vec2(a / c, a / d));
    });
  
    it("vec2", () => {
      expect(vec2.greater(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a > c), +(b > d)));
    });
  
    it("vec2", () => {
      expect(vec2.less(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a < c), +(b < d)));
    });
  
    it("vec2", () => {
      expect(vec2.greaterOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a >= c), +(b >= d)));
    });
  
    it("lessOrEqual", () => {
      expect(vec2.lessOrEqual(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a <= c), +(b <= d)));
    });
  
    it("equal", () => {
      expect(vec2.equal(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a == c), +(b == d)));
    });
  
    it("notEqual", () => {
      expect(vec2.notEqual(test_vec1, test_vec2)).toStrictEqual(new vec2(+(a != c), +(b != d)));
    });
  
    it("min", () => {
      expect(vec2.min(test_vec1, test_vec2)).toStrictEqual(new vec2(Math.min(a, c), Math.min(b, d)));
    });
  
    it("max", () => {
      expect(vec2.max(test_vec1, test_vec2)).toStrictEqual(new vec2(Math.max(a, c), Math.max(b, d)));
    });
  
    it("clampVec", () => {
      expect(vec2.clamp(test_vec1, test_vec2, new vec2(a + b, c + d))).toStrictEqual(new vec2(clamp(a, c, a + b), clamp(b, d, c + d)));
      expect(vec2.clamp(test_vec1, c, d)).toStrictEqual(new vec2(clamp(a, c, d), clamp(b, c, d)));
    });
  
    it("abs", () => {
      expect(vec2.abs(test_vec1)).toStrictEqual(new vec2(Math.abs(a), Math.abs(b)));
    });
  
    it("lerp", () => {
      expect(vec2.lerp(test_vec1, test_vec2, t)).toStrictEqual(new vec2(a + t * (c - a), b + t * (d - b)));
    });
  
    it("mix", () => {
      expect(vec2.mix(test_vec1, test_vec2, t)).toStrictEqual(new vec2(a + t * (c - a), b + t * (d - b)));
    });
  
    it("sqrt", () => {
      expect(vec2.sqrt(test_vec1)).toStrictEqual(new vec2(Math.sqrt(a), Math.sqrt(b)));
    });
  
    it("dot", () => {
      expect(vec2.dot(test_vec1, test_vec2)).toStrictEqual(a * c + b * d);
    });
  
    it("length", () => {
      expect(vec2.lengthVec(test_vec1)).toStrictEqual(Math.sqrt(vec2.dot(test_vec1, test_vec1)));
    });
  
    it("normalize", () => {
      let lenInv = 1.0/vec2.lengthVec(test_vec1);
      expect(vec2.normalize(test_vec1)).toStrictEqual(vec2.mul(test_vec1, lenInv));
    });
  })
  
  