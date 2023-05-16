import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { RexTool } from '@rex/model';
import { SetCurrentTool } from './tools.actions';


@State<RexTool>({
    name: 'rexTool'
})
@Injectable()
export class RexToolState {

    @Selector()
    static current(state: RexTool): RexTool {
        return state;
    }

    @Action(SetCurrentTool)
    setTool(ctx: StateContext<RexTool>, { tool }: SetCurrentTool) {
        ctx.setState(tool);
    }
}

