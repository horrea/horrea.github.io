import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Select, Store } from '@ngxs/store';
import { BlogEditorContent, BlogEditorOptions, HttpData, RexBlogTemplates } from "@rex/model";
import { Observable } from "rxjs";
import { map, tap, switchMap} from "rxjs/operators";
import { SetBlogEditorContent, SetBlogEditorTemplates } from "./editor.actions";
import { BlogEditorContentState, RexBlogEditorOptionsState } from "./editor.state";
import { RexBlogTemplatesState } from "./templates.state";


@Injectable()
export class BlogEditorFacade {

    @Select(RexBlogEditorOptionsState.options) editorOptions$: Observable<BlogEditorOptions>;
    @Select(BlogEditorContentState.content) editorContent$: Observable<BlogEditorContent>;
    @Select(RexBlogTemplatesState.templates) blogTemplates$: Observable<RexBlogTemplates>;

    constructor(private store: Store,
        private http: HttpClient) { }


    loadContent(id: string): void {

    }

    loadTremplates(): Observable<any> {
        return this.http.get<HttpData<RexBlogTemplates>>('/templates')
        .pipe(
            switchMap(({data}) => this.store.dispatch(new SetBlogEditorTemplates(data)))
        )
    }

    updateContent(content: BlogEditorContent): void {
        this.store.dispatch(new SetBlogEditorContent(content))
    }
}