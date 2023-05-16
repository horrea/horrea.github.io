import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'rex-tiny-editor-roote',
    styleUrls: ['./tiny-editor.route.scss'],
    imports: [RouterModule],
    template: `
    <header class="tiny-editor-header">
        <ul>
            <li>
                Switch theme
            </li>
            <li>
                Switch language
            </li>
        </ul>
    </header>
    <aside class="tiny-editor-sidenav">

    </aside>
    <main class="tiny-editor-content">
        <router-outlet></router-outlet>
    </main>
    `
})
export class RexTinyEditorRoute implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() { }
}