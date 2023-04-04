export function padSpaces(pad: string): (text: string) => string {
    return (text) => {
        return (text || '').replace(' ', pad);
    }
}

export function prefix(prefix: string): (text: string) => string {
    const safePrefix = prefix || '';
    return (text) => {
        return text ? safePrefix + text : text;
    }
}