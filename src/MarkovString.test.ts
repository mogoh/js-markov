/* eslint-disable max-len */
import { MarkovString } from './MarkovString.js';
import fs from 'fs';

export function test_markov_string(): void {
    const markov = new MarkovString(2);
    const text = fs.readFileSync('./data/fables_of_aesop.txt', 'utf8');
    markov.addTextUnsplit(text);
    // markov.addSentenceUnsplit(text);
    markov.train();
    console.log(markov.generateString(100));
    console.log(markov.generateString(100));
    console.log(markov.generateString(100));
    console.log(markov.generateString(100));
    console.log(markov.generateString(100));
    console.log(markov.generateString(100));
}
