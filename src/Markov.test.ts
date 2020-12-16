import { Markov } from './Markov.js';
import { default as lodash } from 'lodash';


export function test(): void {
    const markov = new Markov(3);
    const text = [
        [0],
        [0, 1],
        [0, 1, 2],
        [0, 1, 2, 3],
        [0, 1, 2, 3, 4],
        [0, 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5, 6],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];
    markov.addText(text);
    markov.train();
    console.log(markov.getPossibilities().toString());
    for (let i = 1; i <= 10; i++) {
        console.log(markov.generate(20));
    }
}

export function test_markov_single_start(): void {
    const text = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];
    const markov = new Markov(1);
    markov.addText(text);
    markov.train();
    const result = markov.generate(1);
    console.log('TEST Markov Single Start:', lodash.isEqual(result, [0]) ? 'Passed.' : 'Failed.');
}
