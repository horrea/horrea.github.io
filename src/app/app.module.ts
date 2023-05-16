import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EnvironmentModule } from "@rex/core";
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { FooterModule } from './common/footer/footer.module';
import { NavBarModule } from './common/navbar/navbar.module';
import { HorreaMaterialModule } from './material/horrea-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app-store.module';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppStoreModule,
    BrowserAnimationsModule,
    HorreaMaterialModule,
    NavBarModule,
    FooterModule,
    EnvironmentModule.forRoot(environment),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
