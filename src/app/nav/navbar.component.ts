import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Language, Languages, Theme, Themes } from '@rex/model';


@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Input() languages: Languages | null = [];

    @Input() themes: Themes | null = [];

    @Output() onLangChanges = new EventEmitter<Language>()


    @Output() onThemeChanges = new EventEmitter<Theme>()

    constructor() { }

    ngOnInit() { 

    }
}