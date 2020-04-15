import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebase from 'firebase/app';
import 'firebase/analytics';

if (environment.production) {
  // Use firebase and analytics only in production
  firebase.initializeApp(environment.firebaseConfig);
  firebase.analytics();
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
