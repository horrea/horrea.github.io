export function isEmpty<T>(obj: T): boolean {
    return !obj || Object.keys(obj).length === 0;
}