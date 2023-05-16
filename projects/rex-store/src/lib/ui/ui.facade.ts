import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Language, NavItems, Theme, Themes } from '@rex/model';
import { Observable } from 'rxjs';
import { HideAppSpinner, SetCurrentLanguage, SetNavItems, SetTheme, ShowAppSpinner } from './ui.actions';
import { UiSelectors } from './ui.selectors';

@Injectable({ providedIn: 'root' })
export class UiFacade {

    @Select(UiSelectors.themes) themes$: Observable<Themes>;
    @Select(UiSelectors.theme) theme$: Observable<Themes[0] | undefined>;
    @Select(UiSelectors.navItems) navItems$: Observable<NavItems>;
    @Select(UiSelectors.languages) languages$: Observable<Language[]>;
    @Select(UiSelectors.currentLang) language$: Observable<string>;
    @Select(UiSelectors.isSpinnerOn) spinner$: Observable<boolean>;

    constructor(private store: Store) { }

    setTheme(theme: Theme) {
        this.store.dispatch(new SetTheme(theme));
    }


    setNavBar(navItems: NavItems) {
        this.store.dispatch(new SetNavItems(navItems));
    }

    setCurrentLang(lang: Language) {
        this.store.dispatch(new SetCurrentLanguage(lang.code));
    }

    showAppSpinner() {
        this.store.dispatch(new ShowAppSpinner());
    }

    hideAppSpinner() {
        this.store.dispatch(new HideAppSpinner());
    }


}