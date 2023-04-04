import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './403.component';
import { NotFoundComponent } from './404.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  /*  {
     path: 'ptf',
     loadChildren: () => import('../pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
   }, */
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [WelcomeComponent, NotFoundComponent, ForbiddenComponent]
})
export class AppRoutingModule { }
