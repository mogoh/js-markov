import { Markov } from './Markov.js';
// import { Word, Sentence, Text, Primitive } from './types.js';


export class MarkovString extends Markov {
    addSentenceUnsplit(sentence: string, delimiter: string = ' '): void {
        this.text.push(sentence.split(delimiter));
    }

    // Add Text as Array.
    addTextUnsplit(text: string, sentence_delimiter: string = '\n', word_delimiter: string = ' '): void {
        this.text = this.text.concat(text.split(sentence_delimiter).map(sentence => sentence.split(word_delimiter)));
    }

    generateString(max_length = 15): string {
        let generated_array: string[] = this.generate(max_length) as string[];
        return generated_array.join(' ');
    }
}
