import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { OrDefaultStandalone } from '@rex/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RawEditorOptions } from 'tinymce';

@Component({
    selector: 'rex-tiny-editor',
    standalone: true,
    imports: [CommonModule, EditorModule, OrDefaultStandalone],
    styleUrls: ['./tiny-editor.component.scss'],
    templateUrl: 'tiny-editor.component.html'
})
export class RexTinyEditorComponent implements OnInit {

    @Input()
    public tinyOptions: RawEditorOptions;

    constructor() { }

    ngOnInit() { }
}