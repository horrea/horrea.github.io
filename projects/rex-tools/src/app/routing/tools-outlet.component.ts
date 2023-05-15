import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RexToolsFacade } from '@rex/store';

@Component({
    selector: 'rex-tools-outlet',
    standalone: true,
    imports: [RouterModule],
    template: `
       <router-outlet></router-outlet>
    `
})

export class RexToolsOutletComponent {

    constructor(public toolsFacade: RexToolsFacade, translate: TranslateService) {
        translate.setDefaultLang('en')
        translate.use('fr')
    }

}