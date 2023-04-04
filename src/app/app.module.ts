import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnvironmentModule } from "@rex/core";
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppBarModule } from './common/appbar/appbar.module';
import { FooterModule } from './common/footer/footer.module';
import { HorreaMaterialModule } from './material/horrea-material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    BrowserAnimationsModule,
    HorreaMaterialModule,
    AppBarModule,
    FooterModule,
    EnvironmentModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
