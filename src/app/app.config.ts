import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LocationStrategy } from '@angular/common';
import { CustomLocationStrategyService } from './core/services/location-strategy/custom-location-strategy.service';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: CustomLocationStrategyService },
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }), provideAnimationsAsync(),
  ],
};
