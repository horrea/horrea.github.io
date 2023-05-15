import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Thematics, Theme, Themes } from '@rex/model';

@Component({
    selector: 'rex-editor-navbar',
    templateUrl: 'editor-navbar.component.html',
    styleUrls: ['editor-navbar.component.scss']
})

export class EditorNavBarComponent implements OnInit {

    @Input()
    themes: Themes | null = [];

    @Output()
    onThemeChanges = new EventEmitter<Theme>();

    constructor() { }

    ngOnInit() { }
}
