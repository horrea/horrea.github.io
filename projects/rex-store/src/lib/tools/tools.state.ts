import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { RexTools } from '@rex/model';


@State<RexTools>({
    name: 'rexTools',
    defaults: [
        {
            title: 'tools.editors.title',
            desc: 'tools.editors.desc',
            route: '/tools/editors' 
        },
        {
            title: 'tools.indicators.title',
            desc: 'tools.indicators.desc',
            route: '/tools/indicators' 
        }
    ]
})
@Injectable()
export class RexToolsState {

    @Selector()
    static tools(state: RexTools): RexTools {
        return state;
    }
}

