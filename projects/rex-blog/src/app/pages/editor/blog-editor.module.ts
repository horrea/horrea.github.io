import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { AppPipeModule } from '@rex/core';
import { BlogEditorFacade, BlogEditorOptionsState } from '@rex/store';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { BlogEditorRooteComponent } from './blog-editor-route.component';
import { BlogEditorComponent } from './blog-editor.component';
import { BlogEditorMaterialModule } from './editor-material.module';
import { EditorNavBarComponent } from './editor-navbar.component';

const routes: Routes = [
    { path: 'new', component: BlogEditorRooteComponent },
    { path: 'udpate/:id', component: BlogEditorRooteComponent },
    { path: '', redirectTo: 'new', pathMatch: 'full' }
];

export const stateSchema = [
    BlogEditorOptionsState
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EditorModule,
        TranslateModule,
        NgxsModule.forFeature(stateSchema),
        RouterModule.forChild(routes),
        BlogEditorMaterialModule,
        AppPipeModule
    ],
    declarations: [
        BlogEditorRooteComponent,
        BlogEditorComponent,
        EditorNavBarComponent
    ],
    providers: [
        BlogEditorFacade,
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' }],
})
export class BlogEditorModule { }
