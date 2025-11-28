import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/**
 * Bootstraps the Angular application using the root module (AppModule).
 * Handles any errors that occur during the bootstrap process.
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
