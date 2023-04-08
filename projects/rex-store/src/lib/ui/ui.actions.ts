import { NavItems, Theme } from "@rex/model";

export class SetNavItems {
    static readonly type = '[REX-UI] Set navbar items';
    constructor(public items: NavItems) {
    }
}

export class SetCurrentLanguage {
    static readonly type = '[REX-UI] Set user current language';
    constructor(public lang: string) {
    }
}

export class SetTheme {
    static readonly type = '[REX-UI] Set user current theme';
    constructor(public theme: Theme) { }
}

export class ShowAppSpinner {
    static readonly type = '[REX-UI] Show app spinner';
}


export class HideAppSpinner {
    static readonly type = '[REX-UI] Hide app spinner';
}