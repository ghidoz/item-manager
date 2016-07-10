import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment, APP_ROUTER_PROVIDERS, APP_PROVIDERS } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  ...APP_PROVIDERS
]);

