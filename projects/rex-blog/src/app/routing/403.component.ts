import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rex-403',
    template: `
        <h1>Your not authorized to access this page</h1>
    `
})

export class ForbiddenComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}