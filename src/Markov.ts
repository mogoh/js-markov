import { ArrayKeyedMap } from './ArrayKeyedMap.js';
import { Word, Sentence, Text } from './types.js';
import { choice } from './utils.js';


export class Markov {
    // This is an array that will hold all of our states
    protected text: Text = [];
    // This array will keep track of all the possible ways to start a sentence
    protected start: Sentence[] = [];
    // This variable holds the order
    protected order: number = 3;
    // This is an object which will contain a list of each possible outcome
    // key: State, value: Word[]
    protected possibilities = new ArrayKeyedMap<Word[], Word[]>();


    constructor(order: number = 3) {
        this.setOrder(order);
    }

    // Get the whole list of possibilities or a single possibility
    getPossibility(possibility: Word[]): Word[] | undefined {
        return this.possibilities.get(possibility);
    }

    // Set the order
    setOrder(order: number): void {
        if (order <= 0) {
            throw new Error('Markov.setOrder: Order is not a positive number.');
        } else {
            this.order = order;
        }
    }

    addSentence(sentence: Sentence): void {
        this.text.push(sentence);
    }

    // Add Text as Array.
    addText(text: Text): void {
        this.text = this.text.concat(text);
    }

    // Clear the possibilities
    clearPossibilities(): void {
        this.possibilities = new ArrayKeyedMap();
    }

    // Clear the Markov Chain completely
    clearChain(): void {
        this.text = [];
        this.start = [];
        this.possibilities = new ArrayKeyedMap();
        this.order = 3;
    }

    // Clear the states
    clearState(): void {
        this.text = [];
        this.start = [];
    }

    // Train the markov chain
    train(): void {
        this.clearPossibilities();
        // For each sentence
        for (let i = 0; i < this.text.length; i += 1) {
            // Fill the Start
            const sentence = this.text[i];
            this.start.push(sentence.slice(0, this.order));

            // For each state of sentence
            for (let j = 0, k = 1; j < sentence.length;) {
                const state_chain: Word[] = sentence.slice(j, k);
                const next_state: Word = sentence[k];
                let transition_list: Word[] | undefined = this.possibilities.get(state_chain);
                if (transition_list === undefined) {
                    this.possibilities.set(state_chain, [next_state]);
                } else {
                    transition_list.push(next_state);
                }
                if (k < sentence.length) {
                    k += 1;
                }
                if (j < k - this.order || k === sentence.length) {
                    j += 1;
                }
            }
        }
    }


    // Generate output
    generate(max_length = 15): Sentence {
        const startingState: Sentence = choice(this.start);
        let result: Sentence = startingState;
        let current: Sentence = startingState;
        let next: Word;

        for (let i = 0; i < max_length - this.order; i += 1) {
            let possibilities: Word[] | undefined = this.possibilities.get(current);
            if (possibilities === undefined) {
                break;
            } else {
                next = choice(possibilities);
                if (next === undefined) {
                    break;
                } else {
                    result.push(next);
                    current = result.slice(result.length - this.order, result.length);
                }
            }
        }
        return result;
    }
}
