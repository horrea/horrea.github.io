import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [TranslateModule],
    exports: [FooterComponent],
    declarations: [FooterComponent]
})
export class FooterModule { }
