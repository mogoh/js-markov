import { Markov } from '../Markov.js';

const markov1 = new Markov();

const text1 = [
    'Die Aristokratie ist der Bund, die Vereinigung derer, welche genießen wollen, ohne zu schaffen, leben wollen, ohne zu arbeiten, alle Ämter begehren, ohne sie ausfüllen zu können, alle Ehren beanspruchen, ohne sie verdient zu haben: das ist Aristokratie!',
    'Nur noch Historiker und andere Spezialisten werden in Zukunft Schreiben und Lesen lernen müssen.',
    'Gott […] deine Stimme ist leise geworden – zu leise für den Donner unserer Zeit. Wir können dich nicht mehr hören.',
    'Aber es ist ein Zeichen der Zeit, dass die alte Heroennatur um Ehre betteln geht, und das lebendige Menschenherz, wie eine Waise, um einen Tropfen Liebe sich kümmert.',
];
// console.debug(text1.map(sentence => sentence.split(' ').map(word => word.split(''))));
markov1.addText(text1.map(sentence => sentence.split(' ')));
markov1.train();
console.log(markov1.generateRandom(60));

const markov2 = new Markov(2);
const text2 = [
    [1],
    [1,2],
    [1,2,3],
    [1,2,3,4],
    [1,2,3,4,5],
    [4,5,1,2]
];
markov2.addText(text2);
markov2.train();
console.log(markov2.generateRandom(20));
