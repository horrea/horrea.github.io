import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.scss']
})

export class SideNavComponent implements OnInit {

    @Input()
    links: any[] = [];

    constructor() { }

    ngOnInit() { }
}