import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { BlogEditorFacade, RexToolsFacade } from '@rex/store';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { BlogEditorComponent } from './blog/blog-editor.component';
import { RexEditorsComponent } from './editors.component';

export function toolResolver(title: string, desc: string): ResolveFn<any> {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(RexToolsFacade).setCurrentTool({
            title,
            desc,
            route: route.fragment || '/'
        })
    };
}

export function templatesResolver(): ResolveFn<any> {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BlogEditorFacade).loadTremplates()
    };
}

export const EDITORS_ROUTES: Routes = [
    {
        path: '',
        component: RexEditorsComponent,
        providers: [
            RexToolsFacade,
            BlogEditorFacade,
            provideOAuthClient(),
            { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' }
        ],
        resolve: {
            templates: templatesResolver()
        },
        children: [
            {
                path: 'simple-blog', component: BlogEditorComponent,
                resolve: {
                    rexTool: toolResolver(
                        'tools.editors.simple-blog.title',
                        'tools.editors.simple-blog.desc'
                    )
                }
            },
            {
                path: 'blog-from-template', component: BlogEditorComponent,
                resolve: {
                    rexTool: toolResolver(
                        'tools.editors.blog-from-template.title',
                        'tools.editors.blog-from-template.desc'
                    )
                }
            }
        ]
    }
];




