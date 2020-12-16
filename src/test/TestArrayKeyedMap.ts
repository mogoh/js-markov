import { ArrayKeyedMap } from '../ArrayKeyedMap.js';


let akm = new ArrayKeyedMap<number[], number>();

akm.set([1,1], 1);
akm.set([1,2], 2);
akm.set([1,3], 3);

console.log(akm);
