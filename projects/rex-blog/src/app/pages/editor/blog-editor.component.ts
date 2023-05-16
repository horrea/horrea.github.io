import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogEditorFacade } from '@rex/store';
import { debounceTime, Subject, takeUntil } from 'rxjs';


@Component({
    selector: 'rex-blog-editor',
    templateUrl: './blog-editor.component.html'
})
export class BlogEditorComponent implements OnInit, OnDestroy {

    editorForm: FormGroup;

    onDestroy$ = new Subject<void>();

    constructor(public editorFacade: BlogEditorFacade, fb: FormBuilder) {
        this.editorForm = fb.group({
            title: fb.control(''),
            content: fb.control('')
        });
    }

    ngOnInit(): void {
        this.editorForm.get('content')?.valueChanges
            .pipe(
                takeUntil(this.onDestroy$),
                debounceTime(300)
            ).subscribe(content => {
                this.editorFacade.updateContent({ content });
            })
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }


}