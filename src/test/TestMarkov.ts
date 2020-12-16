/* eslint-disable max-len */
import { Markov } from '../Markov.js';


function test1(): void {
    const markov = new Markov();
    const text = [
        'Die Aristokratie ist der Bund, die Vereinigung derer, welche genießen wollen, ohne zu schaffen, leben wollen, ohne zu arbeiten, alle Ämter begehren, ohne sie ausfüllen zu können, alle Ehren beanspruchen, ohne sie verdient zu haben: das ist Aristokratie!',
        'Nur noch Historiker und andere Spezialisten werden in Zukunft Schreiben und Lesen lernen müssen.',
        'Gott […] deine Stimme ist leise geworden – zu leise für den Donner unserer Zeit. Wir können dich nicht mehr hören.',
        'Aber es ist ein Zeichen der Zeit, dass die alte Heroennatur um Ehre betteln geht, und das lebendige Menschenherz, wie eine Waise, um einen Tropfen Liebe sich kümmert.',
    ];
    // console.debug(text1.map(sentence => sentence.split(' ').map(word => word.split(''))));
    markov.addText(text.map(sentence => sentence.split(' ')));
    markov.train();
    console.log(markov.generate(60));
}

function test2(): void {
    const markov = new Markov(3);
    const text = [
        [1],
        [1, 2],
        [1, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [4, 5, 1, 2],
        [5,6],
    ];
    markov.addText(text);
    markov.train();
    console.log(markov.generate(20));
}

test1();
test2();
