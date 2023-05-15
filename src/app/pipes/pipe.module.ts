import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrefixPipe } from './prefix.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [PrefixPipe],
    exports:  [PrefixPipe]
})
export class AppPipeModule { }
