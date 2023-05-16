import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { RawEditorOptions } from 'tinymce';


@State<RawEditorOptions>({
    name: 'rexTinyEditorOptions',
    defaults: {
        // base_url: '/tinymce', // Root for resources
        suffix: '.min',        // Suffix to use when loading resources
        skin : "tinymce-5",
        plugins: 'lists link image table code codesample help wordcount preview',
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample | print preview media fullpage',
        codesample_languages: [
            { text: 'Java', value: 'java' },
            { text: 'JavaScript', value: 'javascript' },
            { text: 'Typescript', value: 'typescript' },
            { text: 'PHP', value: 'php' },
            { text: 'Ruby', value: 'ruby' },
            { text: 'Python', value: 'python' },
            { text: 'C', value: 'c' },
            { text: 'C#', value: 'csharp' },
            { text: 'C++', value: 'cpp' },
            { text: 'HTML/XML', value: 'markup' },
            { text: 'CSS', value: 'css' },
        ]
    }
})
@Injectable()
export class TinyEditorOptionsState {

    @Selector()
    static options(state: RawEditorOptions): RawEditorOptions {
        return state;
    }
}
