import { Component, Input, OnInit } from '@angular/core';
import { Thematics, Theme } from '@rex/model';

@Component({
    selector: 'rex-blog-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class BlogNavBarComponent implements OnInit {

    @Input()
    thematics: Thematics;

    @Input()
    theme: Theme;

    constructor() { }

    ngOnInit() { }
}