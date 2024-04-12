

export function clamp(op1: number, min: number, max: number): number{
    return Math.min(Math.max(op1, min), max);
}

export function mod(x: number, y: number): number{
    return x - y * Math.floor(x/y);
}

export class vec2 {
    public x: number;
    public y: number;

    constructor(x: number, y?: number) {
        if (y == null){
            this.x = x;
            this.y = x;
        }else{
            this.x = x;
            this.y = y;
        }
    };

    static add(op1: vec2 | number, op2: vec2 | number): vec2{
        if (op1 instanceof vec2 && op2 instanceof vec2){
            return new vec2(op1.x + op2.x, op1.y + op2.y);
        }
    
        if(op1 instanceof vec2 && typeof op2 === "number"){
            return new vec2(op1.x + op2, op1.y + op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec2){
            return new vec2(op1 + op2.x, op1 + op2.y);
        }
    
        throw new Error("Wrong arguments");
    }

    static sub(op1: vec2 | number, op2: vec2 | number): vec2{
        if (op1 instanceof vec2 && op2 instanceof vec2){
            return new vec2(op1.x - op2.x, op1.y - op2.y);
        }
    
        if(op1 instanceof vec2 && typeof op2 === "number"){
            return new vec2(op1.x - op2, op1.y - op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec2){
            return new vec2(op1 - op2.x, op1 - op2.y);
        }
    
        throw new Error("Wrong arguments");
    }

    static mul(op1: vec2 | number, op2: vec2 | number): vec2{
        if (op1 instanceof vec2 && op2 instanceof vec2){
            return new vec2(op1.x * op2.x, op1.y * op2.y);
        }
    
        if(op1 instanceof vec2 && typeof op2 === "number"){
            return new vec2(op1.x * op2, op1.y * op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec2){
            return new vec2(op1 * op2.x, op1 * op2.y);
        }
    
        throw new Error("Wrong arguments");
    }

    static div(op1: vec2 | number, op2: vec2 | number): vec2{
        if (op1 instanceof vec2 && op2 instanceof vec2){
            return new vec2(op1.x / op2.x, op1.y / op2.y);
        }
    
        if(op1 instanceof vec2 && typeof op2 === "number"){
            return new vec2(op1.x / op2, op1.y / op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec2){
            return new vec2(op1 / op2.x, op1 / op2.y);
        }
    
        throw new Error("Wrong arguments");
    }

    static greater(op1: vec2, op2: vec2): vec2{
        return new vec2(+(op1.x > op2.x), +(op1.y > op2.y));
    }
    
    static less(op1: vec2, op2: vec2): vec2{
        return new vec2(+(op1.x < op2.x), +(op1.y < op2.y));
    }

    static greaterOrEqual(op1: vec2, op2: vec2): vec2{
        return new vec2(+(op1.x >= op2.x), +(op1.y >= op2.y));
    }
    
    static lessOrEqual(op1: vec2, op2: vec2): vec2{
        return new vec2(+(op1.x <= op2.x), +(op1.y <= op2.y));
    }

    static equal(op1: vec2, op2: vec2): vec2{
        return new vec2(+(op1.x == op2.x), +(op1.y == op2.y));
    }

    static notEqual(op1: vec2, op2: vec2): vec2{
        return new vec2(+(op1.x != op2.x), +(op1.y != op2.y));
    }

    static min(op1: vec2, op2: vec2): vec2{
        return new vec2(Math.min(op1.x, op2.x), Math.min(op1.y, op2.y));
    }

    static max(op1: vec2, op2: vec2): vec2{
        return new vec2(Math.max(op1.x, op2.x), Math.max(op1.y, op2.y));
    }

    static clamp(op1: vec2, op2: vec2 | number, op3: vec2 | number): vec2{
        if(op2 instanceof vec2 && op3 instanceof vec2){
            return new vec2(clamp(op1.x, op2.x, op3.x), clamp(op1.y, op2.y, op3.y));
        }
    
        if(op1 instanceof vec2 && typeof op2 === "number" && typeof op3 === "number"){
            return new vec2(clamp(op1.x, op2, op3), clamp(op1.y, op2, op3));
        }
    
        throw new Error("Wrong arguments");
    }

    static abs(op1: vec2): vec2{
        return new vec2(Math.abs(op1.x), Math.abs(op1.y));
    }

    static lerp(op1: vec2, op2: vec2, t: number): vec2{
        return vec2.add(vec2.mul(vec2.sub(op2, op1), t), op1);
    }
    
    static mix(op1: vec2, op2: vec2, t: number): vec2{
        return vec2.add(vec2.mul(vec2.sub(op2, op1), t), op1);
    }
    
    static sqrt(op1: vec2): vec2{
        return new vec2(Math.sqrt(op1.x), Math.sqrt(op1.y));
    }

    static dot(op1: vec2, op2: vec2): number{
        return op1.x * op2.x + op1.y * op2.y;
    }

    static lengthVec(op1:vec2): number{
        return Math.sqrt(vec2.dot(op1, op1));
    }

    static normalize(op1: vec2): vec2{
        let lenInv = 1.0/vec2.lengthVec(op1);
        return vec2.mul(op1, lenInv);
    }
}

export class vec3 {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y?: number, z?: number) {
        if (+(y == null) + +(z == null) == 1) throw Error("Invalid number of arguments");

        if (y == null && z == null){
            this.x = x;
            this.y = x;
            this.z = x;
        }else{
            this.x = x;
            this.y = y!;
            this.z = z!;
        }
    };

    static add(op1: vec3 | number, op2: vec3 | number): vec3{
        if (op1 instanceof vec3 && op2 instanceof vec3){
            return new vec3(op1.x + op2.x, op1.y + op2.y, op1.z + op2.z);
        }
    
        if(op1 instanceof vec3 && typeof op2 === "number"){
            return new vec3(op1.x + op2, op1.y + op2, op1.z + op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec3){
            return new vec3(op1 + op2.x, op1 + op2.y, op1 + op2.z);
        }
    
        throw new Error("Wrong arguments");
    }

    static sub(op1: vec3 | number, op2: vec3 | number): vec3{
        if (op1 instanceof vec3 && op2 instanceof vec3){
            return new vec3(op1.x - op2.x, op1.y - op2.y, op1.z - op2.z);
        }
    
        if(op1 instanceof vec3 && typeof op2 === "number"){
            return new vec3(op1.x - op2, op1.y - op2, op1.z - op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec3){
            return new vec3(op1 - op2.x, op1 - op2.y, op1 - op2.z);
        }
    
        throw new Error("Wrong arguments");
    }

    static mul(op1: vec3 | number, op2: vec3 | number): vec3{
        if (op1 instanceof vec3 && op2 instanceof vec3){
            return new vec3(op1.x * op2.x, op1.y * op2.y, op1.z * op2.z);
        }
    
        if(op1 instanceof vec3 && typeof op2 === "number"){
            return new vec3(op1.x * op2, op1.y * op2, op1.z * op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec3){
            return new vec3(op1 * op2.x, op1 * op2.y, op1 * op2.z);
        }
    
        throw new Error("Wrong arguments");
    }

    static div(op1: vec3 | number, op2: vec3 | number): vec3{
        if (op1 instanceof vec3 && op2 instanceof vec3){
            return new vec3(op1.x / op2.x, op1.y / op2.y, op1.z / op2.z);
        }
    
        if(op1 instanceof vec3 && typeof op2 === "number"){
            return new vec3(op1.x / op2, op1.y / op2, op1.z / op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec3){
            return new vec3(op1 / op2.x, op1 / op2.y, op1 / op2.z);
        }
    
        throw new Error("Wrong arguments");
    }

    static greater(op1: vec3, op2: vec3): vec3{
        return new vec3(+(op1.x > op2.x), +(op1.y > op2.y), +(op1.z > op2.z));
    }
    
    static less(op1: vec3, op2: vec3): vec3{
        return new vec3(+(op1.x < op2.x), +(op1.y < op2.y),+(op1.z < op2.z));
    }

    static greaterOrEqual(op1: vec3, op2: vec3): vec3{
        return new vec3(+(op1.x >= op2.x), +(op1.y >= op2.y), +(op1.z >= op2.z));
    }
    
    static lessOrEqual(op1: vec3, op2: vec3): vec3{
        return new vec3(+(op1.x <= op2.x), +(op1.y <= op2.y), +(op1.z <= op2.z));
    }

    static equal(op1: vec3, op2: vec3): vec3{
        return new vec3(+(op1.x == op2.x), +(op1.y == op2.y), +(op1.z == op2.z));
    }

    static notEqual(op1: vec3, op2: vec3): vec3{
        return new vec3(+(op1.x != op2.x), +(op1.y != op2.y), +(op1.z != op2.z));
    }

    static min(op1: vec3, op2: vec3): vec3{
        return new vec3(Math.min(op1.x, op2.x), Math.min(op1.y, op2.y), Math.min(op1.z, op2.z));
    }

    static max(op1: vec3, op2: vec3): vec3{
        return new vec3(Math.max(op1.x, op2.x), Math.max(op1.y, op2.y), Math.max(op1.z, op2.z));
    }

    static clamp(op1: vec3, op2: vec3 | number, op3: vec3 | number): vec3{
        if(op2 instanceof vec3 && op3 instanceof vec3){
            return new vec3(clamp(op1.x, op2.x, op3.x), clamp(op1.y, op2.y, op3.y), clamp(op1.z, op2.z, op3.z));
        }
    
        if(op1 instanceof vec3 && typeof op2 === "number" && typeof op3 === "number"){
            return new vec3(clamp(op1.x, op2, op3), clamp(op1.y, op2, op3), clamp(op1.z, op2, op3));
        }
    
        throw new Error("Wrong arguments");
    }

    static abs(op1: vec3): vec3{
        return new vec3(Math.abs(op1.x), Math.abs(op1.y), Math.abs(op1.z));
    }

    static lerp(op1: vec3, op2: vec3, t: number): vec3{
        return vec3.add(vec3.mul(vec3.sub(op2, op1), t), op1);
    }
    
    static mix(op1: vec3, op2: vec3, t: number): vec3{
        return vec3.add(vec3.mul(vec3.sub(op2, op1), t), op1);
    }
    
    static sqrt(op1: vec3): vec3{
        return new vec3(Math.sqrt(op1.x), Math.sqrt(op1.y), Math.sqrt(op1.z));
    }

    static dot(op1: vec3, op2: vec3): number{
        return op1.x * op2.x + op1.y * op2.y + op1.z * op2.z;
    }

    static lengthVec(op1:vec3): number{
        return Math.sqrt(vec3.dot(op1, op1));
    }

    static normalize(op1: vec3): vec3{
        let lenInv = 1.0/vec3.lengthVec(op1);
        return vec3.mul(op1, lenInv);
    }
}

export class vec4 {
    public x: number;
    public y: number;
    public z: number;
    public w: number;

    constructor(x: number, y?: number, z?: number, w?: number) {
        if (+(y == null) + +(z == null) + +(w == null) == 1 
        || +(y == null) + +(z == null) + +(w == null) == 2) throw Error("Invalid number of arguments");

        if (y == null && z == null && w == null){
            this.x = x;
            this.y = x;
            this.z = x;
            this.w = x;
        }else{
            this.x = x;
            this.y = y!;
            this.z = z!;
            this.w = w!;
        }
    };

    static add(op1: vec4 | number, op2: vec4 | number): vec4{
        if (op1 instanceof vec4 && op2 instanceof vec4){
            return new vec4(op1.x + op2.x, op1.y + op2.y, op1.z + op2.z, op1.w + op2.w);
        }
    
        if(op1 instanceof vec4 && typeof op2 === "number"){
            return new vec4(op1.x + op2, op1.y + op2, op1.z + op2, op1.w + op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec4){
            return new vec4(op1 + op2.x, op1 + op2.y, op1 + op2.z, op1 + op2.w);
        }
    
        throw new Error("Wrong arguments");
    }

    static sub(op1: vec4 | number, op2: vec4 | number): vec4{
        if (op1 instanceof vec4 && op2 instanceof vec4){
            return new vec4(op1.x - op2.x, op1.y - op2.y, op1.z - op2.z, op1.w - op2.w);
        }
    
        if(op1 instanceof vec4 && typeof op2 === "number"){
            return new vec4(op1.x - op2, op1.y - op2, op1.z - op2, op1.w - op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec4){
            return new vec4(op1 - op2.x, op1 - op2.y, op1 - op2.z, op1 - op2.w);
        }
    
        throw new Error("Wrong arguments");
    }

    static mul(op1: vec4 | number, op2: vec4 | number): vec4{
        if (op1 instanceof vec4 && op2 instanceof vec4){
            return new vec4(op1.x * op2.x, op1.y * op2.y, op1.z * op2.z, op1.w * op2.w);
        }
    
        if(op1 instanceof vec4 && typeof op2 === "number"){
            return new vec4(op1.x * op2, op1.y * op2, op1.z * op2, op1.w * op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec4){
            return new vec4(op1 * op2.x, op1 * op2.y, op1 * op2.z, op1 * op2.w);
        }
    
        throw new Error("Wrong arguments");
    }

    static div(op1: vec4 | number, op2: vec4 | number): vec4{
        if (op1 instanceof vec4 && op2 instanceof vec4){
            return new vec4(op1.x / op2.x, op1.y / op2.y, op1.z / op2.z, op1.w / op2.w);
        }
    
        if(op1 instanceof vec4 && typeof op2 === "number"){
            return new vec4(op1.x / op2, op1.y / op2, op1.z / op2, op1.w / op2);
        }
    
        if(typeof op1 === "number" && op2 instanceof vec4){
            return new vec4(op1 / op2.x, op1 / op2.y, op1 / op2.z, op1 / op2.w);
        }
    
        throw new Error("Wrong arguments");
    }

    static greater(op1: vec4, op2: vec4): vec4{
        return new vec4(+(op1.x > op2.x), +(op1.y > op2.y), +(op1.z > op2.z), +(op1.w > op2.w));
    }
    
    static less(op1: vec4, op2: vec4): vec4{
        return new vec4(+(op1.x < op2.x), +(op1.y < op2.y),+(op1.z < op2.z), +(op1.w < op2.w));
    }

    static greaterOrEqual(op1: vec4, op2: vec4): vec4{
        return new vec4(+(op1.x >= op2.x), +(op1.y >= op2.y), +(op1.z >= op2.z), +(op1.w >= op2.w));
    }
    
    static lessOrEqual(op1: vec4, op2: vec4): vec4{
        return new vec4(+(op1.x <= op2.x), +(op1.y <= op2.y), +(op1.z <= op2.z), +(op1.w <= op2.w));
    }

    static equal(op1: vec4, op2: vec4): vec4{
        return new vec4(+(op1.x == op2.x), +(op1.y == op2.y), +(op1.z == op2.z), +(op1.w == op2.w));
    }

    static notEqual(op1: vec4, op2: vec4): vec4{
        return new vec4(+(op1.x != op2.x), +(op1.y != op2.y), +(op1.z != op2.z), +(op1.w != op2.w));
    }

    static min(op1: vec4, op2: vec4): vec4{
        return new vec4(Math.min(op1.x, op2.x), Math.min(op1.y, op2.y), Math.min(op1.z, op2.z), Math.min(op1.w, op2.w));
    }

    static max(op1: vec4, op2: vec4): vec4{
        return new vec4(Math.max(op1.x, op2.x), Math.max(op1.y, op2.y), Math.max(op1.z, op2.z), Math.max(op1.w, op2.w));
    }

    static clamp(op1: vec4, op2: vec4 | number, op3: vec4 | number): vec4{
        if(op2 instanceof vec4 && op3 instanceof vec4){
            return new vec4(clamp(op1.x, op2.x, op3.x), clamp(op1.y, op2.y, op3.y), clamp(op1.z, op2.z, op3.z), clamp(op1.w, op2.w, op3.w));
        }
    
        if(op1 instanceof vec4 && typeof op2 === "number" && typeof op3 === "number"){
            return new vec4(clamp(op1.x, op2, op3), clamp(op1.y, op2, op3), clamp(op1.z, op2, op3), clamp(op1.w, op2, op3));
        }
    
        throw new Error("Wrong arguments");
    }

    static abs(op1: vec4): vec4{
        return new vec4(Math.abs(op1.x), Math.abs(op1.y), Math.abs(op1.z), Math.abs(op1.w));
    }

    static lerp(op1: vec4, op2: vec4, t: number): vec4{
        return vec4.add(vec4.mul(vec4.sub(op2, op1), t), op1);
    }
    
    static mix(op1: vec4, op2: vec4, t: number): vec4{
        return vec4.add(vec4.mul(vec4.sub(op2, op1), t), op1);
    }
    
    static sqrt(op1: vec4): vec4{
        return new vec4(Math.sqrt(op1.x), Math.sqrt(op1.y), Math.sqrt(op1.z), Math.sqrt(op1.w));
    }

    static dot(op1: vec4, op2: vec4): number{
        return op1.x * op2.x + op1.y * op2.y + op1.z * op2.z + op1.w * op2.w;
    }

    static lengthVec(op1:vec4): number{
        return Math.sqrt(vec4.dot(op1, op1));
    }

    static normalize(op1: vec4): vec4{
        let lenInv = 1.0/vec4.lengthVec(op1);
        return vec4.mul(op1, lenInv);
    }
}


