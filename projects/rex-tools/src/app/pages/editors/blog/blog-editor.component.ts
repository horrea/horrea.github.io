import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { OrDefaultStandalone } from '@rex/core';
import { BlogArticle } from '@rex/model';
import { BlogEditorFacade } from '@rex/store';
import { filter } from 'rxjs/operators';
import { RexBlogFormComponent } from './blog-form.component';

@Component({
    selector: 'rex-blog-editor',
    standalone: true,
    templateUrl: './blog-editor.component.html',
    styleUrls: ['./blog-editor.component.scss'],
    imports: [CommonModule, RexBlogFormComponent, OrDefaultStandalone, MatDialogModule]
})
export class BlogEditorComponent implements OnInit, OnDestroy {

    constructor(public editorFacade: BlogEditorFacade,
        public dialog: MatDialog,
        route: ActivatedRoute, router: Router) {
    }

    ngOnInit(): void {

    }

    submitBlogForm(article: BlogArticle) {
        this.dialog.open(RexBlogEditorDialog, {
            data: article
        }).afterClosed()
        .pipe(filter(res => !!res))
        .subscribe(filename => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(new Blob([JSON.stringify(article, null, 2)], {
              type: "application/json"
            }));
            a.setAttribute("download", `${filename}.json`);
            a.click();
        });
    }

    ngOnDestroy(): void {

    }

}

@Component({
    standalone: true,
    selector: 'rex-blog-editor-dialog',
    imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    template: `
        <h1 mat-dialog-title>{{data.title}}</h1>
        <div mat-dialog-content>
            <mat-form-field class="w-100">
                <mat-label>File name</mat-label>
                <input matInput #filename [value]="data.code">
                <span matSuffix>.json</span>
            </mat-form-field>
        </div>
        <div mat-dialog-actions>
            <button mat-button (click)="dialogRef.close()">Cancel</button>
            <button mat-button [mat-dialog-close]="filename.value" cdkFocusInitial>Export file</button>
        </div>
    `
  })
  export class RexBlogEditorDialog {
    constructor(public dialogRef: MatDialogRef<RexBlogEditorDialog>,
        @Inject(MAT_DIALOG_DATA) public data: BlogArticle) {
    }
  }


