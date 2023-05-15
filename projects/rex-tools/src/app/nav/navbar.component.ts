import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Thematics, Theme, Themes } from '@rex/model';

@Component({
    selector: 'rex-tools-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class RexToolsNavBarComponent implements OnInit {

    @Input()
    themes: Themes | null = [];

    @Output()
    onClickLogin = new EventEmitter<void>();

    @Output()
    onThemeChanges = new EventEmitter<Theme>();

    constructor() { }

    ngOnInit() { }
}
