import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'src/environments/environment';

import { RexToolsModule } from './app/tools.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RexToolsModule)
  .catch(err => console.error(err));
