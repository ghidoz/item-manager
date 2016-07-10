import { provideRouter, RouterConfig } from '@angular/router';
import { HomeRoutes } from './home';

export const routes: RouterConfig = [
  ...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];