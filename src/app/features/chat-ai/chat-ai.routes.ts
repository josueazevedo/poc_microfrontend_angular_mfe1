import { Route } from '@angular/router';
import { MFE_CONFIG } from '../../config/mfe.config';

export const chat_ai_routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/chat-ai/chat-ai.component').then(
        (m) => m.ChatAiComponent
      ),
  },
];
