import { Primitive } from './types.js';
import { default as lodash } from 'lodash';


export class ArrayKeyedMap<K extends Primitive[], V> {
    #map: [K, V][] = [];

    // ToDo
    // Static properties
    // get Map[@@species]

    // Instance properties
    // Map.prototype.size

    // Instance methods
    // Map.prototype.clear()
    // Map.prototype.delete(key)
    // Map.prototype.has(key)

    // Iteration methods
    // Map.prototype[@@iterator]()
    // Map.prototype.keys()
    // Map.prototype.values()
    // Map.prototype.entries()
    // Map.prototype.forEach(callbackFn[, thisArg])

    get(search_key: K): V | undefined {
        for (let kv of this.#map) {
            if (lodash.isEqual(kv[0], search_key)) {
                return kv[1];
            }
        }
        return undefined;
    }

    set(key: K, value: V): void {
        for (let kv of this.#map) {
            if (lodash.isEqual(kv[0], key)) {
                kv[1] = value;
                return;
            }
        }
        this.#map.push([key, value]);
    }

    toString(): string {
        let return_string = '';
        for (let kv of this.#map) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            return_string += `[${kv[0].toString()}] => ${kv[1]}\n`;
        }
        return return_string;
    }
}
