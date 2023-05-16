import { Component, Inject } from '@angular/core';
import { Environment, ENVIRONMENT } from '@rex/core';
import { TranslateService } from '@ngx-translate/core';
import { UiFacade } from '@rex/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(ENVIRONMENT) public env: Environment,
    public translate: TranslateService,
    public uiFacade: UiFacade) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
