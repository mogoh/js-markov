import { Markov } from './Markov.js';
export class MarkovString extends Markov {
    constructor() {
        super(...arguments);
        // This is an array that will hold all of our states
        this.states = [];
        // This array will keep track of all the possible ways to start a sentence
        this.start = [];
        // This variable holds the order
        this.order = 3;
        // This is an object which will contain a list of each possible outcome
        this.possibilities = {};
    }
    // Clear the possibilities
    clearPossibilities() {
        this.possibilities = {};
    }
    // Get the whole list of possibilities or a single possibility
    getPossibilities(possibility) {
        if (this.possibilities[possibility] !== undefined) {
            return this.possibilities[possibility];
        }
        else {
            throw new Error(`There is no such possibility called ${possibility}`);
        }
    }
    // Get the order
    getOrder() {
        return this.order;
    }
    // Set the order
    setOrder(order = 3) {
        if (order <= 0) {
            console.error('Markov.setOrder: Order is not a positive number. Defaulting to 3.');
        }
        this.order = order;
    }
    // Add a single state or states
    addStates(state) {
        if (Array.isArray(state)) {
            this.states = state;
        }
        else {
            this.states.push(state);
        }
    }
    // Clear the Markov Chain completely
    clearChain() {
        this.states = [];
        this.start = [];
        this.possibilities = {};
        this.order = 3;
    }
    // Clear the states
    clearState() {
        this.states = [];
        this.start = [];
    }
    // Train the markov chain
    train() {
        this.clearPossibilities();
        for (let i = 0; i < this.states.length; i++) {
            this.start.push(this.states[i].substring(0, this.order));
            for (let j = 0; j <= this.states[i].length - this.order; j++) {
                const gram = this.states[i].substring(j, j + this.order);
                if (!this.possibilities[gram]) {
                    this.possibilities[gram] = [];
                }
                this.possibilities[gram].push(this.states[i].charAt(j + this.order));
            }
        }
    }
    // Generate output
    generateRandom(chars = 15) {
        const startingState = this.random(this.start, 'array');
        let result = startingState;
        let current = startingState;
        let next = '';
        for (let i = 0; i < chars - this.order; i++) {
            next = this.random(this.possibilities[current], 'array');
            if (!next) {
                break;
            }
            result += next;
            current = result.substring(result.length - this.order, result.length);
        }
        return result;
    }
}
//# sourceMappingURL=MarkovString.js.map