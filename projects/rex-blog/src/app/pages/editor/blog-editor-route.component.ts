import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { BlogEditorFacade, UiFacade } from '@rex/store';


@Component({
    selector: 'rex-blog-editor-route',
    template: `
        <rex-editor-navbar [themes]="uiFacade.themes$ | async" 
                (onThemeChanges)="uiFacade.setTheme($event)"
                class="mat-elevation-z6 bkg-primary">
        </rex-editor-navbar>
        <header class="bkg-primary">
            <mat-toolbar class="horrea-toolbar">
                <button mat-icon-button (click)="drawer.toggle()">
                    <mat-icon>menu</mat-icon>
                </button>
                <span>{{route.title| async}}</span>    
            </mat-toolbar>
        </header>
        <mat-drawer-container autosize>
            <mat-drawer #drawer mode="side" [opened]="true">
                <p>Auto-resizing sidenav</p>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </mat-drawer>
            <mat-drawer-content>
                <rex-blog-editor></rex-blog-editor>
            </mat-drawer-content>
        </mat-drawer-container>
    `,
    styleUrls: ['./blog-editor-route.component.scss']
})
export class BlogEditorRooteComponent implements OnInit, OnDestroy {

    constructor(public editorFacade: BlogEditorFacade,
        public uiFacade: UiFacade,
        public route: ActivatedRoute) {
           
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }


}



