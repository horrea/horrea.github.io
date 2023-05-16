import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rex-404',
    template: `
        <h1>The requested page is not found!</h1>
    `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}