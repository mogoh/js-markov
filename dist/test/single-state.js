import { MarkovString } from '../MarkovString.js';
const markov = new MarkovString();
// @ Thanks goes to: Patrick Henry to the Virginia Convention
const txt = 'We have petitioned; ' +
    'we have remonstrated; ' +
    'we have supplicated; ' +
    'we have prostrated ourselves before the tyrannical hands of the ministry and parliament. ' +
    'Our petitions have been slighted; ' +
    'our remonstrances have produced additional violence and insult; our supplications have been disregarded; ' +
    'and we have been spurned, with contempt, from the foot of the throne.';
markov.addStates(txt);
markov.train();
console.log(markov.generateRandom(100));
//# sourceMappingURL=single-state.js.map