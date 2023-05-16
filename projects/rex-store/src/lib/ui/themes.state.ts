import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Themes, Theme } from '@rex/model';
import { SetTheme } from './ui.actions';

@State<Themes>({
    name: 'rexTheme',
    defaults: [
        {
            theme: Theme.LIGHT,
            className: 'rex-light-theme',
            icon: 'light_mode',
            current: true
        },
        {
            theme: Theme.DARk,
            className: 'rex-dark-theme',
            icon: 'dark_mode',
            current: false
        }

    ]
})
@Injectable()
export class ThemesState {

    @Selector()
    static themes(state: Themes): Themes {
        return state;
    }

    @Action(SetTheme)
    setTheme(ctx: StateContext<Themes>, { theme }: SetTheme) {
        const newState = ctx.getState().map(th => ({ ...th, current: th.theme === theme }));
        ctx.setState(newState);

    }
}

