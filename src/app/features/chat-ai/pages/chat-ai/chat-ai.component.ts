import { Component } from '@angular/core';
import { PromptComponent } from '../../components/prompt/prompt.component';

@Component({
  selector: 'app-chat-ai',
  standalone: true,
  imports: [PromptComponent],
  templateUrl: './chat-ai.component.html',
  styleUrl: './chat-ai.component.scss',
})
export class ChatAiComponent {}
