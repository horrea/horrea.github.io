import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './routing/403.component';
import { NotFoundComponent } from './routing/404.component';
import { WelcomeComponent } from './routing/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  /*  {
     path: 'ptf',
     loadChildren: () => import('../pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
   }, */
   {
    path: 'tools',
    loadChildren: () => import('../../projects/rex-tools/src/app/tools-routing.module').then(m => m.REX_TOOLS_STANDALONE_ROUTES)
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [WelcomeComponent, NotFoundComponent, ForbiddenComponent]
})
export class AppRoutingModule { }
