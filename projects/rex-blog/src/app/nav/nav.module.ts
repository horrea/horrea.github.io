import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppPipeModule } from '@rex/core';
import { BlogNavBarComponent } from './navbar.component';

import { SideNavComponent } from './side-nav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppPipeModule,
        MatButtonModule,
        MatRadioModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        TranslateModule
    ],
    declarations: [SideNavComponent, BlogNavBarComponent],
    exports: [SideNavComponent, BlogNavBarComponent],
    providers: [],
})
export class BlogNavModule { }
