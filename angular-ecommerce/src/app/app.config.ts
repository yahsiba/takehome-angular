/**
 * AppConfig
 *
 * Purpose:
 *   Provides application-wide configuration.
 *
 * How It Works:
 *   - Sets up zone change detection and the application router using provideRouter.
 *
 */
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
