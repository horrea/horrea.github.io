import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Select, Store } from '@ngxs/store';
import { Observable } from "rxjs";
import { RawEditorOptions } from "tinymce";
import { TinyEditorOptionsState } from "./tiny-editor.state";


@Injectable()
export class TinyEditorFacade {

    @Select(TinyEditorOptionsState.options) tinyOptions$: Observable<RawEditorOptions>;

    constructor(private store: Store,
        private http: HttpClient) { }
}