// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from "@rex/core";

export const environment: Environment = {
  production: false,
  githubClientId: '2d82644a70572083bf47',
  githubLoginUrl: 'https://github.com/login/oauth/authorize',
  githubTokenUrl: 'https://github.com/login/oauth/token',
  githubScopes: 'user:email',
  firebase: {
    apiKey: "AIzaSyCo73mbNIJ9s-qtC7DHB3uawBSCo-6U1KM",
    authDomain: "horrea-2e5b4.firebaseapp.com",
    projectId: "horrea-2e5b4",
    storageBucket: "horrea-2e5b4.appspot.com",
    messagingSenderId: "504252915181",
    appId: "1:504252915181:web:a694a922545a8cf31c5be4",
    measurementId: "G-Q487FR9JW6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
