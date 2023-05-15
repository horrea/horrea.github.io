import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RexToolsFacade } from '@rex/store';

@Component({
    selector: 'rex-tools-welcome',
    standalone: true,
    imports: [MatCardModule, CommonModule, MatButtonModule, RouterModule, TranslateModule],
    template: `
        <h1>{{'tools.welcome.header' | translate}}</h1>
        <br/>
        <p class="subtitle-2 text-muted">{{'tools.welcome.subheader' | translate}}</p>
        <div class="cards">
            <mat-card *ngFor="let tool of toolsFacade.tools$ | async">
                <mat-card-header>
                    <mat-card-title>{{tool.title | translate}}</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                    {{tool.desc | translate}}
                </mat-card-content>
                <mat-card-actions>
                    <a mat-button [routerLink]="tool.route">
                        {{'tools.route' | translate}}
                    </a>
                </mat-card-actions>
            </mat-card>   
        </div>
    `,
    styleUrls: ['./tools-welcome.component.scss']
})

export class RexToolsWelcomeComponent {

    constructor(public toolsFacade: RexToolsFacade) {
    }

}