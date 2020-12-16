import { Primitive } from './types.js';


export class ArrayKeyedMap<K extends Primitive[], V> {
    #map: [K, V][] = [];

    get(search_key: K): V | undefined {
        for (let kv of this.#map) {
            if (kv[0].length === search_key.length) {
                let equal = true;
                for (let i = 0; i < kv[0].length; i += 1) {
                    if (kv[0][i] !== search_key[i]) {
                        equal = false;
                        break;
                    }
                }
                if (equal) {
                    return kv[1];
                }
            }
        }
        return undefined;
    }

    set(key: K, value: V): void {
        for (let kv of this.#map) {
            if (kv[0].length === key.length) {
                let equal = true;
                for (let i = 0; i < kv[0].length; i += 1) {
                    if (kv[0][i] !== key[i]) {
                        equal = false;
                        break;
                    }
                }
                if (equal) {
                    kv[1] = value;
                    return;
                }
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
