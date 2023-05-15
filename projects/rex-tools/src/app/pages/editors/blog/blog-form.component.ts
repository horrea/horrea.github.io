import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { AppPipeModule, withDiacriticReplaced, withPunctuationReplaced, withSpacesReplaced } from '@rex/core';
import { BlogArticle, RexBlogTemplate, RexBlogTemplates } from '@rex/model';
import { EditorModule } from '@tinymce/tinymce-angular';
import {produce} from "immer"
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { RawEditorOptions } from 'tinymce';


export interface RexBlogArticleForm {
    title: FormControl<string>;
    code: FormControl<string>;
    template: FormControl<string | RexBlogTemplate>;
    tags: FormControl<string[]>;
    content: FormControl<string>;
}

export function rexBlogTemplateTypeGard(input: undefined | string | RexBlogTemplate): input is RexBlogTemplate {
    if (null == input || undefined == input) {
        return false;
    }
    if (undefined != (input as RexBlogTemplate).code) {
        return true;
    }
    return false;
}

@Component({
    selector: 'rex-blog-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EditorModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        MatChipsModule,
        TranslateModule,
        AppPipeModule
    ],
    templateUrl: 'blog-form.component.html',
    styleUrls: ['./blog-form.component.scss']

})
export class RexBlogFormComponent implements OnInit, OnDestroy {

    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    readonly onDestroy$ = new Subject<void>();

    @Input()
    value: BlogArticle;

    @Input()
    tinyOptions: RawEditorOptions | undefined;

    @Input()
    templates: RexBlogTemplates = [];

    @Output()
    saveBlogArticle = new EventEmitter<BlogArticle>()

    readonly editorForm: FormGroup<RexBlogArticleForm>;
    
    readonly blogTagsFormControl: FormControl<string[]>;
    readonly blogContentFormControl: FormControl<string>;

    tags: string[] = [];

    templates$: Observable<RexBlogTemplates>;

    constructor(fb: FormBuilder) {
        this.editorForm = fb.nonNullable.group({
            title: ['', Validators.required],
            code: ['', Validators.required],
            template: ['' as string | RexBlogTemplate],
            tags: [[] as string[]],
            content: ['', Validators.required]
        });
        this.blogTagsFormControl = this.editorForm.controls.tags;
        this.blogContentFormControl = this.editorForm.controls.content;
    }

    ngOnInit(): void {

        this.templates$ = this.editorForm.controls.template.valueChanges.pipe(
            startWith(''),
            map(tpl => {
                if (rexBlogTemplateTypeGard(tpl)) {
                    // One tempalate is selected
                    this.blogTagsFormControl.setValue(tpl.tags);
                    this.blogContentFormControl.setValue(tpl.content);
                    return this.templates;
                }
                // Use still typing...
                return (this.templates || []).filter(tmpl => tmpl.title.includes(tpl || ''))
            })
        );

        this.editorForm.controls.title.valueChanges
            .pipe(
                takeUntil(this.onDestroy$),
                map(withDiacriticReplaced()),
                map(withPunctuationReplaced('-')),
                map(withSpacesReplaced('_')),
            ).subscribe(code => {
                // TODO: normalize to create file name.
                this.editorForm.controls.code.setValue(code);
            })
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    submitForm() {
        const value = this.editorForm.value;
        if (value
            && value.title
            && value.code
            && value.content) {
            const articleOrUndefined = {
                title: value.title,
                code: value.code,
                content: value.content,
                template: rexBlogTemplateTypeGard(value.template) ? value.template.code : undefined,
                tags: value.tags || [],
            };
            this.saveBlogArticle.emit(articleOrUndefined);
        } else {
            // show error message
        }
    }

    removeTag(tag: string) {
        const tags = this.blogTagsFormControl.value || [];
        const index = tags.indexOf(tag);
        if (index >= 0) {
            const nextState = produce(tags, draft => {
                draft.slice(index, 1)
            })
            this.blogTagsFormControl.setValue(nextState);
        }
    }

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        const tags = this.blogTagsFormControl.value || [];
        // Add our keyword
        if (value) {
            const nextState = produce(tags, draft => {
                draft.push(value);
            })
            this.blogTagsFormControl.setValue(nextState);
        }
        // Clear the input value
        event.chipInput!.clear();
    }



    templateTitle(template: RexBlogTemplate): string {
        return template?.title || '';
    }

    templateTitleFn(templates: RexBlogTemplates): (code: string) => string {
        return (code: string) => {
            const template = (templates || []).find(tpl => tpl.code == code);
            return template?.title || '';
        }
    }

}