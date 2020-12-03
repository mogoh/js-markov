export class MarkovGeneric<T extends string | number> {
    // This is an array that will hold all of our states
    states: T[] = [];
    // This array will keep track of all the possible ways to start a sentence
    start: T[] = [];
    // This variable holds the order
    order: number = 3;
    // This is an object which will contain a list of each possible outcome
    possibilities: { [key: T]: T[]; } = {};
    foo: Map<T[],T[]> = new Map<T[],T[]>();

    // Clear the possibilities
    clearPossibilities(): void {
        this.possibilities = {};
    }

    // Get the whole list of possibilities or a single possibility
    getPossibilities(possibility: T): T[] | { [key: T]: T[]; } {
        if (this.possibilities[possibility] !== undefined) {
            return this.possibilities[possibility];
        } else {
            throw new Error(`There is no such possibility called ${possibility}`);
        }
    }

    // Generate a random value
    random(obj: string[] | number[] | string, type: 'array' | 'object'): string | number {
        if (Array.isArray(obj) && type === 'array') {
            const index = Math.floor(Math.random() * obj.length);
            return obj[index];
        } else if (typeof obj === 'object' && type === 'object') {
            const keys = Object.keys(obj);
            const index = Math.floor(Math.random() * keys.length);
            return keys[index];
        } else {
            // TODO
            throw new Error('TODO');
        }
    }

    // Get the order
    getOrder(): number {
        return this.order;
    }

    // Set the order
    setOrder(order: number = 3): void {
        if (order <= 0) {
            console.error(
                'Markov.setOrder: Order is not a positive number. Defaulting to 3.'
            );
        }

        this.order = order;
    }

    // Add a single state or states
    addStates(state: T | T[]): void {
        if (Array.isArray(state)) {
            this.states = state;
        } else {
            this.states.push(state);
        }
    }

    // Clear the Markov Chain completely
    clearChain(): void {
        this.states = [];
        this.start = [];
        this.possibilities = {};
        this.order = 3;
    }

    // Clear the states
    clearState(): void {
        this.states = [];
        this.start = [];
    }

    // Train the markov chain
    train(): void {
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
    generateRandom(chars = 15): string {
        const startingState = this.random(this.start, 'array') as string;
        let result: string = startingState;
        let current = startingState;
        let next = '';

        for (let i = 0; i < chars - this.order; i++) {
            next = this.random(this.possibilities[current], 'array') as string;

            if (!next) {
                break;
            }

            result += next;
            current = result.substring(result.length - this.order, result.length);
        }

        return result;
    }
}