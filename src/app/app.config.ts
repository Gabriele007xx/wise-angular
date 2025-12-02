import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JWT_OPTIONS,JwtHelperService } from '@auth0/angular-jwt';
import { routes } from './app.routes';

function getterToken() {
  return localStorage.getItem('accessToken');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ]
};
