import { Selector } from "@ngxs/store";
import { Language, NavItems, Themes } from "@rex/model";
import { SpinnerState } from "@rex/store";
import { LanguagesState } from "./languages.state";
import { NavItemsState } from "./nav-items.state";
import { ThemesState } from "./themes.state";

export class UiSelectors {

    @Selector([
        ThemesState.themes
    ])
    public static themes(themes: Themes): Themes {
        return themes;
    }

    @Selector([
        ThemesState.themes
    ])
    public static theme(themes: Themes): Themes[0] | undefined {
        return (themes || []).find(theme => theme.current);
    }


    @Selector([
        NavItemsState.navItems
    ])
    public static navItems(navItems: NavItems): NavItems {
        return navItems;
    }

    @Selector([
        LanguagesState.languages
    ])
    public static languages(languages: Language[]): Language[] {
        return languages;
    }

    @Selector([
        LanguagesState.current
    ])
    public static currentLang(lang: Language): string | null {
        if (lang) {
            return lang.code
        }
        return null;
    }

    @Selector([
        SpinnerState.isOn
    ])
    public static isSpinnerOn(on: boolean): boolean {
        return on;
    }

}