"use strict";
// type NestedArray =
//     | string[]
//     | number[]
//     | boolean[]
//     | NestedArray[];
// // Taken from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// // Works only when primetives are string, number, or boolean.
// export function compareArray(arrayA: NestedArray, arrayB: NestedArray): boolean {
//     // compare lengths - can save a lot of time 
//     if (arrayA.length !== arrayB.length) {
//         return false;
//     }
//     for (let i = 0; i < arrayA.length; i += 1) {
//         if (Array.isArray(arrayA[i]) !== Array.isArray(arrayB[i])) {
//             // If one element is array, but the other isn't.
//             return false;
//         } else {
//             if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
//                 // if both are arrays, call recursive.
//                 if (!compareArray(arrayA[i] as NestedArray, arrayB[i] as NestedArray)) {
//                     return false;
//                 }
//             }
//         }
//         if (arrayA[i] !== arrayB[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// export class ArrayKeyedMap<K extends NestedArray, V> extends Map<K, V> {
//     delete(key: K): boolean {
//         // TODO
//         return false;
//     }
//     set(key: K, value: V): this {
//         // TODO
//         return this;
//     }
//     get(key: K): V | undefined {
//         for (let [k, v] of this.entries()) {
//             if (compareArray(key, k)) {
//                 return v;
//             }
//         }
//         return undefined;
//     }
//     has(key: K): boolean {
//         for (let k of this.keys()) {
//             if (compareArray(key, k)) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
//# sourceMappingURL=ArrayKeyedMap.js.map