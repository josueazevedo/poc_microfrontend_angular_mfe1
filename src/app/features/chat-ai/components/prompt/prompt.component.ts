import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightAuto],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss',
})
export class PromptComponent {
  messages: { text: string; isUser: boolean }[] = [
    {
      text: 'function soma(a, b) {\n  return a + b;\n}',

      isUser: false,
    },
    {
      text: 'Hello, how can I assist you today?',
      isUser: true,
    },
  ];
  userInput: string = '';
}
