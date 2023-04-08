import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SpinnerStateModel } from '@rex/model';
import { HideAppSpinner, ShowAppSpinner } from './ui.actions';

@State<SpinnerStateModel>({
    name: 'rexSpinner',
    defaults: false
})
@Injectable()
export class SpinnerState {

    @Selector()
    static isOn(state: SpinnerStateModel): boolean {
        return state;
    }

    @Action(ShowAppSpinner)
    showSpinner(ctx: StateContext<SpinnerStateModel>) {
        ctx.setState(true);
    }

    @Action(HideAppSpinner)
    hideSpinner(ctx: StateContext<SpinnerStateModel>) {
        ctx.setState(false);
    }
}

