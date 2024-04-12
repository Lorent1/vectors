export = vectors;
export as namespace vectors;

declare module vectors{
    function clamp(op1: number, min: number, max: number): number;
    function mod(x: number, y: number): number;

    class vec2 {
        public x: number;
        public y: number;

        constructor(x: number, y?: number);

        static add(op1: vec2, op2: vec2): vec2;
        static add(op1: vec2, op2: number): vec2;
        static add(op1: number, op2: vec2): vec2;
    
        static sub(op1: vec2, op2: vec2): vec2;
        static sub(op1: vec2, op2: number): vec2;
        static sub(op1: number, op2: vec2): vec2;
        
        static mul(op1: vec2, op2: vec2): vec2;
        static mul(op1: vec2, op2: number): vec2;
        static mul(op1: number, op2: vec2): vec2;
    
        static div(op1: vec2, op2: vec2): vec2;
        static div(op1: vec2, op2: number): vec2;
        static div(op1: number, op2: vec2): vec2;
    
        static greater(op1: vec2, op2: vec2): vec2;
        static less(op1: vec2, op2: vec2): vec2;
        static greaterOrEqual(op1: vec2, op2: vec2): vec2;
        static lessOrEqual(op1: vec2, op2: vec2): vec2;
        static equal(op1: vec2, op2: vec2): vec2;
        static notEqual(op1: vec2, op2: vec2): vec2;
    
        static min(op1: vec2, op2: vec2): vec2;
        static max(op1: vec2, op2: vec2): vec2;
        static clamp(op1: vec2, op2: vec2, op3: vec2): vec2;
        static clamp(op1: vec2, op2: number, op3: number): vec2;
    
        static abs(op1: vec2): vec2;
    
        static lerp(op1: vec2, op2: vec2, t: number): vec2;
        static mix(op1: vec2, op2: vec2, t: number): vec2;
    
        static sqrt(op1: vec2, op2: vec2): vec2;
    
        static dot(op1: vec2, op2: vec2): number;
    
        static lengthVec(op1: vec2): number;
    
        static normalize(op1: vec2): vec2;
    }


    class vec3 {
        public x: number;
        public y: number;
        public z: number;

        constructor(x: number, y?: number, z?: number);

        static add(op1: vec3, op2: vec3): vec3;
        static add(op1: vec3, op2: number): vec3;
        static add(op1: number, op2: vec3): vec3;
    
        static sub(op1: vec3, op2: vec3): vec3;
        static sub(op1: vec3, op2: number): vec3;
        static sub(op1: number, op2: vec3): vec3;
        
        static mul(op1: vec3, op2: vec3): vec3;
        static mul(op1: vec3, op2: number): vec3;
        static mul(op1: number, op2: vec3): vec3;
    
        static div(op1: vec3, op2: vec3): vec3;
        static div(op1: vec3, op2: number): vec3;
        static div(op1: number, op2: vec3): vec3;
    
        static greater(op1: vec3, op2: vec3): vec3;
        static less(op1: vec3, op2: vec3): vec3;
        static greaterOrEqual(op1: vec3, op2: vec3): vec3;
        static lessOrEqual(op1: vec3, op2: vec3): vec3;
        static equal(op1: vec3, op2: vec3): vec3;
        static notEqual(op1: vec3, op2: vec3): vec3;
    
        static min(op1: vec3, op2: vec3): vec3;
        static max(op1: vec3, op2: vec3): vec3;
        static clamp(op1: vec3, op2: vec3, op3: vec3): vec3;
        static clamp(op1: vec3, op2: number, op3: number): vec3;
    
        static abs(op1: vec3): vec3;
    
        static lerp(op1: vec3, op2: vec3, t: number): vec3;
        static mix(op1: vec3, op2: vec3, t: number): vec3;
    
        static sqrt(op1: vec3, op2: vec3): vec3;
    
        static dot(op1: vec3, op2: vec3): number;
    
        static lengthVec(op1: vec3): number;
    
        static normalize(op1: vec3): vec3;
    
    }

    class vec4 {
        public x: number;
        public y: number;
        public z: number;
        public w: number;

        constructor(x: number, y?: number, z?: number, w?: number);

        static add(op1: vec4, op2: vec4): vec4;
        static add(op1: vec4, op2: number): vec4;
        static add(op1: number, op2: vec4): vec4;
    
        static sub(op1: vec4, op2: vec4): vec4;
        static sub(op1: vec4, op2: number): vec4;
        static sub(op1: number, op2: vec4): vec4;
        
        static mul(op1: vec4, op2: vec4): vec4;
        static mul(op1: vec4, op2: number): vec4;
        static mul(op1: number, op2: vec4): vec4;
    
        static div(op1: vec4, op2: vec4): vec4;
        static div(op1: vec4, op2: number): vec4;
        static div(op1: number, op2: vec4): vec4;
    
        static greater(op1: vec4, op2: vec4): vec4;
        static less(op1: vec4, op2: vec4): vec4;
        static greaterOrEqual(op1: vec4, op2: vec4): vec4;
        static lessOrEqual(op1: vec4, op2: vec4): vec4;
        static equal(op1: vec4, op2: vec4): vec4;
        static notEqual(op1: vec4, op2: vec4): vec4;
    
        static min(op1: vec4, op2: vec4): vec4;
        static max(op1: vec4, op2: vec4): vec4;
        static clamp(op1: vec4, op2: vec4, op3: vec4): vec4;
        static clamp(op1: vec4, op2: number, op3: number): vec4;
    
        static abs(op1: vec4): vec4;
    
        static lerp(op1: vec4, op2: vec4, t: number): vec4;
        static mix(op1: vec4, op2: vec4, t: number): vec4;
    
        static sqrt(op1: vec4, op2: vec4): vec4;
    
        static dot(op1: vec4, op2: vec4): number;
    
        static lengthVec(op1: vec4): number;
    
        static normalize(op1: vec4): vec4;
    }
}