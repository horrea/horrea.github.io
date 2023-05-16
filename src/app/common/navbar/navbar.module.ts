import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppPipeModule } from 'src/app/pipes/pipe.module';
import { RexNavBarComponent } from './navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AppPipeModule,
        MatButtonModule,
        MatRadioModule,
        MatIconModule,
        MatMenuModule,
        TranslateModule
    ],
    exports: [RexNavBarComponent],
    declarations: [RexNavBarComponent]
})
export class NavBarModule { }
