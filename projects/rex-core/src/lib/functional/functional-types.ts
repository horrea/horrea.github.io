
export class Optional<T> {
    private readonly t: T | undefined;
    private readonly _isNullOrUndefined: boolean
    constructor(t: T | null | undefined) {
        if (t) {
            this.t = t;
            this._isNullOrUndefined = false;
        }
        this._isNullOrUndefined = true;
    }

    private isNullOrUndefined(v: T | undefined): v is undefined {
        return this._isNullOrUndefined;
    }

    private isDefined(v: T | undefined): v is T {
        return !this._isNullOrUndefined;
    }

    public static of<V>(t: V | null | undefined): Optional<V> {
        return new Optional<V>(t);
    }

    public static empty<V>(): Optional<V> {
        return new Optional<V>(null);
    }

    public map<V>(mapper: (arg: T) => V): Optional<V> {
        if (this.isDefined(this.t)) {
            return new Optional(mapper(this.t));
        }
        return Optional.empty<V>();

    }

    public orElse(supplier: () => T): T {
        if (this.isDefined(this.t)) {
            return this.t;
        }
        return supplier();
    }

    public get(): T | null | undefined {
        return this.t;
    }
}

export declare type Supplier<V> = () => V;

export declare type Consumer<T> = (i: T) => void;

export declare type Function<T, V> = (i: T) => V;

export declare type Identity<T> = Function<T, T>;