// Pick a random T from T[]
export function choice<T>(list: T[]): T {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
}
