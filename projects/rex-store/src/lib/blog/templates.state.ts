import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BlogEditorContent, BlogEditorOptions, RexBlogTemplates } from '@rex/model';
import { SetBlogEditorContent, SetBlogEditorTemplates } from './editor.actions';



@State<RexBlogTemplates>({
    name: 'rexBlogTemplates',
    defaults: []
})
@Injectable()
export class RexBlogTemplatesState {

    @Selector()
    static templates(state: RexBlogTemplates): RexBlogTemplates {
        return state;
    }


    @Action(SetBlogEditorTemplates)
    setTemplates(ctx: StateContext<RexBlogTemplates>, { templates }: SetBlogEditorTemplates) {
        ctx.setState(templates);
    }





}