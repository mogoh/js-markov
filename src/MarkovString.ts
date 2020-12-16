import { Markov } from './Markov.js';
import { Sentence } from './types.js';


export class MarkovString extends Markov {
    arrayToString(sentence: Sentence): string {
        return sentence.join(' ');
    }
}
