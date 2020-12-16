import { ArrayKeyedMap } from './ArrayKeyedMap.js';


export function test_ArrayKeyedMap_set_get(): void {
    let akm = new ArrayKeyedMap<number[], number>();
    let expected = undefined;
    let result = akm.get([]);
    console.log('TEST ArrayKeyedMap Get "Undefined":', result === expected ? 'Passed.' : 'Failed.');

    akm = new ArrayKeyedMap<number[], number>();
    akm.set([1], 1);
    expected = undefined;
    result = akm.get([]);
    console.log('TEST ArrayKeyedMap Get "Undefined":', result === expected ? 'Passed.' : 'Failed.');

    akm = new ArrayKeyedMap<number[], number>();
    akm.set([1], 1);
    expected = undefined;
    result = akm.get([2]);
    console.log('TEST ArrayKeyedMap Get "Undefined":', result === expected ? 'Passed.' : 'Failed.');

    akm = new ArrayKeyedMap<number[], number>();
    akm.set([1], 1);
    let expected2 = 1;
    result = akm.get([1]);
    console.log('TEST ArrayKeyedMap Get "1":', result === expected2 ? 'Passed.' : 'Failed.');

    akm = new ArrayKeyedMap<number[], number>();
    akm.set([1, 2], 1);
    akm.set([1, 2], 2);
    expected2 = 2;
    result = akm.get([1, 2]);
    console.log('TEST ArrayKeyedMap Get "2":', result === expected2 ? 'Passed.' : 'Failed.');
}
