import { NgModule } from '@angular/core';
import { OrDefault } from './orDefault.pipe';

import { PrefixPipe } from './prefix.pipe';

@NgModule({
    declarations: [PrefixPipe, OrDefault],
    exports: [PrefixPipe, OrDefault]
})
export class AppPipeModule { }
