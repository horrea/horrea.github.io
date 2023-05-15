import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { StateClass } from "@ngxs/store/internals";
import { LanguagesState, RexBlogTemplatesState, RexToolsFacade, RexToolsState, RexToolState, ThemesState, RexBlogEditorOptionsState } from '@rex/store';
import { environment } from 'src/environments/environment';

export const stateSchema: StateClass[] = [
    LanguagesState, ThemesState, RexToolsState, RexToolState, RexBlogTemplatesState, RexBlogEditorOptionsState
    // Add state schemas here !
];

const imports = environment.production ? [
    NgxsModule.forRoot(stateSchema, {
        developmentMode: false
    })
] : [
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot(stateSchema, {
        developmentMode: true
    })

]

@NgModule({
    imports: imports,
    exports: [NgxsModule],
    providers: [RexToolsFacade]
})
export class RexToolsStoreModule { }
