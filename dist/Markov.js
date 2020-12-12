// See LICENSE-file for license.
// See CONTRIBUTORS-file for contributors and copyright.
export class Markov {
    // Generate a random value
    random(obj, type) {
        if (Array.isArray(obj) && type === 'array') {
            const index = Math.floor(Math.random() * obj.length);
            return obj[index];
        }
        else if (typeof obj === 'object' && type === 'object') {
            const keys = Object.keys(obj);
            const index = Math.floor(Math.random() * keys.length);
            return keys[index];
        }
        else {
            // TODO
            throw new Error('TODO');
        }
    }
}
//# sourceMappingURL=Markov.js.map