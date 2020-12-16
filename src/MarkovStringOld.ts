export class MarkovString {
    // This is an array that will hold all of our states
    #text: string[] = [];
    // This array will keep track of all the possible ways to start a sentence
    #start: string[] = [];
    // This variable holds the order
    #order: number = 3;
    // This is an object which will contain a list of each possible outcome
    #possibilities = new Map<string, string[]>();


    constructor(order: number = 3) {
        this.setOrder(order);
    }


    // Get the whole list of possibilities or a single possibility
    getPossibilities(possibility: string): string[] | undefined {
        return this.#possibilities.get(possibility);
    }

    // Get the order
    getOrder(): number {
        return this.#order;
    }

    // Set the order
    setOrder(order: number): void {
        if (order <= 0) {
            throw new Error('Markov.setOrder: Order is not a positive number.');
        } else {
            this.#order = order;
        }
    }

    addSentence(sentence: string): void {
        this.#text.push(sentence);
    }

    // Add Text as Array.
    addText(state: string[]): void {
        this.#text.concat(state);
    }

    // Clear the possibilities
    clearPossibilities(): void {
        this.#possibilities = new Map<string, string[]>();
    }

    // Clear the Markov Chain completely
    clearChain(): void {
        this.#text = [];
        this.#start = [];
        this.#possibilities = new Map<string, string[]>();
        this.#order = 3;
    }

    // Clear the states
    clearState(): void {
        this.#text = [];
        this.#start = [];
    }

    // Train the markov chain
    train(): void {
        this.clearPossibilities();

        for (let i = 0; i < this.#text.length; i++) {
            this.#start.push(this.#text[i].substring(0, this.#order));

            for (let j = 0; j <= this.#text[i].length - this.#order; j++) {
                const state = this.#text[i].substring(j, j + this.#order);

                let transition: string[] | undefined = this.#possibilities.get(state);
                if (transition === undefined) {
                    this.#possibilities.set(state, [this.#text[i].charAt(j + this.#order)]);
                } else {
                    transition.push(this.#text[i].charAt(j + this.#order));
                }
            }
        }
        console.debug(this.#start);
        console.debug(this.#possibilities);
    }

    // Generate a random value
    choice(obj: string[]): string {
        const index = Math.floor(Math.random() * obj.length);
        return obj[index];
    }

    // Generate output
    generateRandom(chars = 15): string {
        const startingState: string = this.choice(this.#start) as string;
        let result: string = startingState;
        let current: string = startingState;
        let next: string = '';

        for (let i = 0; i < chars - this.#order; i += 1) {
            next = this.choice((this.#possibilities.get(current)) as string[]);

            if (!next) {
                break;
            }

            result += next;
            current = result.substring(result.length - this.#order, result.length);
        }

        return result;
    }
}
