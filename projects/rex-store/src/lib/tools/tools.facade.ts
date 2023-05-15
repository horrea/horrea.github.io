import { Injectable } from "@angular/core";
import { Select, Store } from '@ngxs/store';
import { RexTool, RexTools } from "@rex/model";
import { Observable } from "rxjs";
import { RexToolState } from "./tool.state";
import { SetCurrentTool } from "./tools.actions";
import { RexToolsState } from "./tools.state";


@Injectable()
export class RexToolsFacade {

    @Select(RexToolState.current) tool$: Observable<RexTool>;
    @Select(RexToolsState.tools) tools$: Observable<RexTools>;

    constructor(private store: Store) { }

    setCurrentTool(tool: RexTool): Observable<any> {
        return this.store.dispatch(new SetCurrentTool(tool));
    }
}