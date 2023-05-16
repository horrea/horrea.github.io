import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { NavItems } from '@rex/model';
import { SetNavItems } from './ui.actions';
;

const defaultNavItems: NavItems = [
    {
        label: 'ui.nav.jobs',
        icon: 'card_travel',
        visiblity: 'FULL',
        order: 1
    },
    {
        label: 'ui.nav.condidates',
        icon: 'engineering',
        visiblity: 'FULL',
        order: 2
    },
    {
        label: 'ui.nav.applications',
        icon: 'near_me',
        visiblity: 'RESTRICTED',
        order: 3
    },
    /*  {
         label: 'ui.nav.offers',
         icon: 'near_me',
         visiblity: 'RESTRICTED',
         order: 4
     }, */
    {
        label: 'ui.nav.contracts',
        icon: 'fact_check',
        visiblity: 'RESTRICTED',
        order: 3
    }
]

@State<NavItems>({
    name: 'rexNavItems',
    defaults: defaultNavItems
})
@Injectable()
export class NavItemsState {

    @Selector()
    static navItems(state: NavItems): NavItems {
        return state;
    }

    @Action(SetNavItems)
    setNavItems(ctx: StateContext<NavItems>, { items }: SetNavItems) {
        ctx.setState(items);
    }


}