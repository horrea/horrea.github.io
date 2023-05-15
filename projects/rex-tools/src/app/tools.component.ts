import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ENVIRONMENT, Environment } from '@rex/core';
import { UiFacade } from '@rex/store';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'rex-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class RexToolsComponent {
  title = 'rex-tools';
  constructor(translate: TranslateService,
    @Inject(ENVIRONMENT) public env: Environment,
    public oauthService: OAuthService,
    public uiFacade: UiFacade) {
    translate.setDefaultLang('en')
    translate.use('en')
    oauthService.configure({
      loginUrl:  env.githubLoginUrl,
      tokenEndpoint: env.githubTokenUrl,
      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin,
      // The SPA's id. The SPA is registerd with this id at the auth-server
      // clientId: 'server.code',
      clientId: env.githubClientId,
      scope: env.githubScopes,
      responseType: 'code',
      oidc: false
    });
    oauthService.tryLogin();
    // oauthService.loadDiscoveryDocumentAndTryLogin();
  }


  initCodeFlow() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    this.oauthService.initCodeFlow();
  }
}
