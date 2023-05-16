export function truthy(): boolean {
    return true;
}
export function falsy(): boolean {
    return false;
}

export function not<T>(fn: (t: T) => boolean): (t: T) => boolean {
    return t => !fn(t);
}

export function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
    return (value) => (fns || []).reduce((acc, fn) => fn(acc), value);
}