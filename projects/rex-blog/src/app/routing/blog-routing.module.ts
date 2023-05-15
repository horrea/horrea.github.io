import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: 'blog', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'editor', loadChildren: () => import('../pages/editor/blog-editor.module').then(m => m.BlogEditorModule) },
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
