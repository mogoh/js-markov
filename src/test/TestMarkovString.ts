/* eslint-disable max-len */
import { MarkovString } from '../MarkovString.js';
import fs from 'fs';

function test(): void {
    const markov = new MarkovString(2);
    const text = fs.readFileSync('./src/test/text.txt', 'utf8');
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

test();
