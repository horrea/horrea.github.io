import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { StateClass } from '@ngxs/store/internals';
import { TinyEditorFacade, TinyEditorOptionsState } from '@rex/store';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { RexTinyEditorComponent } from './tiny-editor.component';
import { RexTinyEditorRoute } from './tiny-editor.route';

export const stateSchema: StateClass[] = [
    TinyEditorOptionsState
    // Add state schemas here !
];

export const TINY_EDITOR_ROUTES: Routes = [
    {
        path: '',
        component: RexTinyEditorRoute,
        providers: [
            TinyEditorFacade,
            importProvidersFrom(NgxsModule.forFeature(stateSchema)),
            { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' }
        ],
        children: [
            {
                path: 'blog',
                component: RexTinyEditorComponent
            },
            {
                path: 'template',
                component: RexTinyEditorComponent
            }
        ]
    }
];
