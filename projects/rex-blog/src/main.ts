import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BlogModule } from './app/blog.module';


platformBrowserDynamic().bootstrapModule(BlogModule)
  .catch(err => console.error(err));
