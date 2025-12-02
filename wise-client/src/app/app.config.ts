import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { JWT_OPTIONS,JwtHelperService } from '@auth0/angular-jwt';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

function tokenGetter() {
  return localStorage.getItem('accessToken');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    // provideClientHydration(withEventReplay())
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: { tokenGetter } },
  ]
};
