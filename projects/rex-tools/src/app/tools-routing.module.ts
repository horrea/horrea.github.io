import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RexToolsMaterialModule } from './material/tools-material.module';
import { NotFoundComponent } from './routing/404.component';
import { RexToolsOutletComponent } from './routing/tools-outlet.component';
import { RexToolsWelcomeComponent } from './routing/tools-welcome.component';
import { RexToolsStoreModule } from './store/tools-store.module';

// AoT requires an exported function for factories
export function ChildHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/tools/i18n/');
}

export const REX_TOOLS_STANDALONE_ROUTES: Routes = [
  {
    path: '',
    component: RexToolsOutletComponent,
    providers: [
      importProvidersFrom(RouterModule),
      importProvidersFrom(RexToolsStoreModule),
      importProvidersFrom(RexToolsMaterialModule),
      importProvidersFrom(TranslateModule.forChild({
        isolate: true,
        loader: {
          provide: TranslateLoader,
          useFactory: ChildHttpLoaderFactory,
          deps: [HttpClient]
        }
      }))
    ],
    children: [
      { path: '', component: RexToolsWelcomeComponent, pathMatch: 'full' },
      { path: 'tiny', loadChildren: () => import('./pages/tiny/tiny-editor.router').then(m => m.TINY_EDITOR_ROUTES) },
      { path: 'editors', loadChildren: () => import('./pages/editors/editors.router').then(m => m.EDITORS_ROUTES) },
      { path: 'indicators', loadChildren: () => import('./pages/indicators/indicators.module').then(m => m.RexIndicatorsModule) },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

export const TOOLS_ROUTES: Routes = [
  { path: '', component: RexToolsWelcomeComponent, pathMatch: 'full' },
  { path: 'tiny', loadChildren: () => import('./pages/tiny/tiny-editor.router').then(m => m.TINY_EDITOR_ROUTES) },
  { path: 'editors', loadChildren: () => import('./pages/editors/editors.router').then(m => m.EDITORS_ROUTES) },
  { path: 'indicators', loadChildren: () => import('./pages/indicators/indicators.module').then(m => m.RexIndicatorsModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RexToolsStoreModule,
    RexToolsMaterialModule,
    RouterModule.forChild(TOOLS_ROUTES)],
  exports: [RouterModule]
})
export class RexToolsRoutingModule { }
