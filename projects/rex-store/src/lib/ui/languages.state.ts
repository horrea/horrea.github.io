import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateOperator } from '@ngxs/store';
import { compose, patch, updateItem } from '@ngxs/store/operators';
import { Language, Languages } from '@rex/model';
import { byCodeLanguagePedicate, currentLanguagePedicate } from './languages.operator';
import { SetCurrentLanguage } from './ui.actions';


export const defaultLanguages: Languages = [
    {
        code: 'en',
        current: true
    },
    {
        code: 'fr',
        current: false
    }
]

@State<Languages>({
    name: 'rexLanguages',
    defaults: defaultLanguages
})
@Injectable()
export class LanguagesState {

    @Selector()
    static languages(state: Languages): Languages {
        return state;
    }

    @Selector()
    static current(state: Languages): Language | undefined {
        return (state || []).find(lang => lang.current);
    }

    @Action(SetCurrentLanguage)
    setNavItems(ctx: StateContext<Languages>, { lang }: SetCurrentLanguage) {
        const unSetCurrent: StateOperator<Language> = patch({ current: false });
        const setCurrent: StateOperator<Language> = patch({ current: true });
        ctx.setState(
            compose(
                updateItem(currentLanguagePedicate, unSetCurrent),
                updateItem(byCodeLanguagePedicate(lang), setCurrent)
            )
        );

    }
}

