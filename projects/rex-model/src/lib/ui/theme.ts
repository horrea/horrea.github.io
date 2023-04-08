//export declare type Theme = 'LIGHT' | 'DARK';
export enum Theme {
    LIGHT = 'LIGHT',
    DARk = 'DARK'
}

export declare type Themes = Array<{
    theme: Theme,
    className: string;
    icon: string;
    current: boolean;
}>;
