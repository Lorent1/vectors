export = vectors;
export as namespace vectors;

declare module vectors{
    function clamp(op1: number, min: number, max: number): number;

    class vec2 {
        public x: number;
        public y: number;

        constructor(x: number, y?: number);
    }

    function add(op1: vec2, op2: vec2): vec2;
    function add(op1: vec2, op2: number): vec2;
    function add(op1: number, op2: vec2): vec2;

    function sub(op1: vec2, op2: vec2): vec2;
    function sub(op1: vec2, op2: number): vec2;
    function sub(op1: number, op2: vec2): vec2;
    
    function mul(op1: vec2, op2: vec2): vec2;
    function mul(op1: vec2, op2: number): vec2;
    function mul(op1: number, op2: vec2): vec2;

    function div(op1: vec2, op2: vec2): vec2;
    function div(op1: vec2, op2: number): vec2;
    function div(op1: number, op2: vec2): vec2;

    function greater(op1: vec2, op2: vec2): vec2;
    function less(op1: vec2, op2: vec2): vec2;
    function greaterOrEqual(op1: vec2, op2: vec2): vec2;
    function lessOrEqual(op1: vec2, op2: vec2): vec2;
    function equal(op1: vec2, op2: vec2): vec2;
    function notEqual(op1: vec2, op2: vec2): vec2;

    function min(op1: vec2, op2: vec2): vec2;
    function max(op1: vec2, op2: vec2): vec2;
    function clampVec(op1: vec2, op2: vec2, op3: vec2): vec2;
    function clampVec(op1: vec2, op2: number, op3: number): vec2;

    function abs(op1: vec2): vec2;

    function lerp(op1: vec2, op2: vec2, t: number): vec2;
    function mix(op1: vec2, op2: vec2, t: number): vec2;

    function sqrt(op1: vec2, op2: vec2): vec2;

    function dot(op1: vec2, op2: vec2): number;

    function length(op1: vec2): number;

    function normalize(op1: vec2): vec2;

    class vec3 {
        public x: number;
        public y: number;
        public z: number;

        constructor(x: number, y?: number, z?: number);
    }

    function add(op1: vec3, op2: vec3): vec3;
    function add(op1: vec3, op2: number): vec3;
    function add(op1: number, op2: vec3): vec3;

    function sub(op1: vec3, op2: vec3): vec3;
    function sub(op1: vec3, op2: number): vec3;
    function sub(op1: number, op2: vec3): vec3;
    
    function mul(op1: vec3, op2: vec3): vec3;
    function mul(op1: vec3, op2: number): vec3;
    function mul(op1: number, op2: vec3): vec3;

    function div(op1: vec3, op2: vec3): vec3;
    function div(op1: vec3, op2: number): vec3;
    function div(op1: number, op2: vec3): vec3;

    function greater(op1: vec3, op2: vec3): vec3;
    function less(op1: vec3, op2: vec3): vec3;
    function greaterOrEqual(op1: vec3, op2: vec3): vec3;
    function lessOrEqual(op1: vec3, op2: vec3): vec3;
    function equal(op1: vec3, op2: vec3): vec3;
    function notEqual(op1: vec3, op2: vec3): vec3;

    function min(op1: vec3, op2: vec3): vec3;
    function max(op1: vec3, op2: vec3): vec3;
    function clampVec(op1: vec3, op2: vec3, op3: vec3): vec3;
    function clampVec(op1: vec3, op2: number, op3: number): vec3;

    function abs(op1: vec3): vec3;

    function lerp(op1: vec3, op2: vec3, t: number): vec3;
    function mix(op1: vec3, op2: vec3, t: number): vec3;

    function sqrt(op1: vec3, op2: vec3): vec3;

    function dot(op1: vec3, op2: vec3): number;

    function length(op1: vec3): number;

    function normalize(op1: vec3): vec3;

    class vec4 {
        public x: number;
        public y: number;
        public z: number;
        public w: number;

        constructor(x: number, y?: number, z?: number, w?: number);
    }

    function add(op1: vec4, op2: vec4): vec4;
    function add(op1: vec4, op2: number): vec4;
    function add(op1: number, op2: vec4): vec4;

    function sub(op1: vec4, op2: vec4): vec4;
    function sub(op1: vec4, op2: number): vec4;
    function sub(op1: number, op2: vec4): vec4;
    
    function mul(op1: vec4, op2: vec4): vec4;
    function mul(op1: vec4, op2: number): vec4;
    function mul(op1: number, op2: vec4): vec4;

    function div(op1: vec4, op2: vec4): vec4;
    function div(op1: vec4, op2: number): vec4;
    function div(op1: number, op2: vec4): vec4;

    function greater(op1: vec4, op2: vec4): vec4;
    function less(op1: vec4, op2: vec4): vec4;
    function greaterOrEqual(op1: vec4, op2: vec4): vec4;
    function lessOrEqual(op1: vec4, op2: vec4): vec4;
    function equal(op1: vec4, op2: vec4): vec4;
    function notEqual(op1: vec4, op2: vec4): vec4;

    function min(op1: vec4, op2: vec4): vec4;
    function max(op1: vec4, op2: vec4): vec4;
    function clampVec(op1: vec4, op2: vec4, op3: vec4): vec4;
    function clampVec(op1: vec4, op2: number, op3: number): vec4;

    function abs(op1: vec4): vec4;

    function lerp(op1: vec4, op2: vec4, t: number): vec4;
    function mix(op1: vec4, op2: vec4, t: number): vec4;

    function sqrt(op1: vec4, op2: vec4): vec4;

    function dot(op1: vec4, op2: vec4): number;

    function length(op1: vec4): number;

    function normalize(op1: vec4): vec4;
}