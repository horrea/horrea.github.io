import { BlogEditorContent, RexBlogTemplates } from "@rex/model";

export class SetBlogEditorContent {
    static readonly type = '[REX-Blog-Editor] Set editor content';
    constructor(public content: BlogEditorContent) {
    }
}

export class SetBlogEditorTemplates {
    static readonly type = '[REX-Blog-Editor] Set editor templates';
    constructor(public templates: RexBlogTemplates) {
    }
}