import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppPipeModule } from '../pipes/pipe.module';
import { NavBarComponent } from './navbar.component';
import { SideNavComponent } from './sidenav.component';

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
    exports: [SideNavComponent, NavBarComponent],
    declarations: [SideNavComponent, NavBarComponent]
})
export class AppNavModule { }
