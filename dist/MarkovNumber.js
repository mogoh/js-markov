"use strict";
// import { Markov } from './Markov.js';
// export class MarkovNumber extends Markov {
//     /**
//      * This is currently not working.
//      */
//     // This is an array that will hold all of our states
//     states: { [key: number]: number[]; } = {};
//     start: number[] = [];
//     // This is an object which will contain a list of each possible outcome
//     possibilities: { [key: number]: number[]; } = {};
//     // Clear the possibilities
//     clearPossibilities(): void {
//         this.possibilities = {};
//     }
//     // Get the whole list of possibilities or a single possibility
//     getPossibilities(possibility: number): number[] | { [key: number]: number[]; } {
//         if (this.possibilities[possibility] !== undefined) {
//             return this.possibilities[possibility];
//         } else {
//             throw new Error(`There is no such possibility called ${possibility}`);
//         }
//     }
//     // Add a single state or states
//     addStates(states: { [key: number]: number[]; }): void {
//         for (let key in states) {
//             this.states[key].push(...states[key]);
//         }
//     }
//     // Clear the Markov Chain completely
//     clearChain(): void {
//         this.states = [];
//         this.possibilities = {};
//     }
//     // Clear the states
//     clearState(): void {
//         this.states = [];
//     }
//     // Train the markov chain
//     train(): void {
//         // TODO
//         // this.clearPossibilities();
//         // for (let i = 0; i < this.states.length; i++) {
//         //     //TODO: what does this mean ?
//         //     const { state, predictions } = this.states[i];
//         //     if (!this.possibilities[state]) {
//         //         this.possibilities[state] = [];
//         //     }
//         //     this.possibilities[state].push(...predictions);
//         // }
//     }
//     // Generate output
//     generateRandom(chars = 15): number[] {
//         // TODO
//         console.log(chars);
//         // const possibilities = [];
//         // for (let i = 0; i < chars; ++i) {
//         //     const key = this.random(this.possibilities, 'object');
//         //     if (Math.random() < 0.5) {
//         //         possibilities.push(parseInt(key));
//         //     } else {
//         //         possibilities.push(parseInt(this.predict(key)));
//         //     }
//         // }
//         // return possibilities;
//         return [];
//     }
//     predict(value: number): number | void {
//         if (this.possibilities[value]) {
//             return this.random(this.possibilities[value], 'array') as number;
//         } else {
//             console.error('The markov chain could not find a possibility');
//         }
//     }
// }
//# sourceMappingURL=MarkovNumber.js.map