import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BlogEditorContent, BlogEditorOptions } from '@rex/model';
import { SetBlogEditorContent } from './editor.actions';

@State<BlogEditorOptions>({
    name: 'rexBlogEditorOptions',
    defaults: {
        base_url: '/assets/tinymce', // Root for resources
        suffix: '.min',        // Suffix to use when loading resources
        plugins: 'autoresize lists link image table code codesample help wordcount preview',
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample | print preview media fullpage',
        codesample_languages: [
            {text: 'Java', value: 'java'},
            {text: 'JavaScript', value: 'javascript'},
            {text: 'Typescript', value: 'typescript'},       
            {text: 'PHP', value: 'php'},
            {text: 'Ruby', value: 'ruby'},
            {text: 'Python', value: 'python'},
            {text: 'C', value: 'c'},
            {text: 'C#', value: 'csharp'},
            {text: 'C++', value: 'cpp'},
            {text: 'HTML/XML', value: 'markup'},
            {text: 'CSS', value: 'css'},
        ]
    }
})
@Injectable()
export class RexBlogEditorOptionsState {

    @Selector()
    static options(state: BlogEditorOptions): BlogEditorOptions {
        return state;
    }


}

@State<BlogEditorContent>({
    name: 'rexBlogEditorContent',
    defaults: {
        content: {}
    },
})
@Injectable()
export class BlogEditorContentState {

    @Selector()
    static content(state: BlogEditorContent): BlogEditorContent {
        return state;
    }

    @Action(SetBlogEditorContent)
    setContent(ctx: StateContext<BlogEditorContent>, { content }: SetBlogEditorContent) {
        ctx.setState(content);
    }


}