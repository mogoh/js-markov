import { Markov } from './Markov.js';
export declare class MarkovString extends Markov {
    states: string[];
    start: string[];
    order: number;
    possibilities: {
        [key: string]: string[];
    };
    clearPossibilities(): void;
    getPossibilities(possibility: string): string[] | {
        [key: string]: string[];
    };
    getOrder(): number;
    setOrder(order?: number): void;
    addStates(state: string | string[]): void;
    clearChain(): void;
    clearState(): void;
    train(): void;
    generateRandom(chars?: number): string;
}
