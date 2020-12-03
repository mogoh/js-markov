// Taken from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// Works only on flat arrays.
// Works only when elements are comparable.
// Warning - two different object instances will never be equal: {x:20} !== {x:20}
export function compareArray<T>(arrayA: Array<T>, arrayB: Array<T>): boolean {
    // compare lengths - can save a lot of time 
    if (arrayA.length !== arrayB.length) {
        return false;
    }

    for (let i = 0; i < arrayA.length; i += 1) {
        if (arrayA[i] !== arrayB[i]) {
            return false;
        }
    }
    return true;
}

export class ArrayKeyedMap<K extends Array<K>, V> extends Map<K, V> {

    // get(key: K[]): V | undefined {
        // for (let {[}k, v} of this.entries()) {
        //     if (compareArray<K>(key,k)) {
        //         return true;
        //     }
        // }

        // return undefined;
    // }

    has(key: K[]): boolean {
        for (let k of this.keys()) {
            if (compareArray<K>(key,k)) {
                return true;
            }
        }
        return false;
    }
}
