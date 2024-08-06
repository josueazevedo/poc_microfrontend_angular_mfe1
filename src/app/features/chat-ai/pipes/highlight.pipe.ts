import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Identificar blocos de código delimitados por ```
    const codeRegex = /```(.*?)```/gs;

    return value.replace(codeRegex, (match, p1) => {
      return `<pre><code [highlightAuto]="${p1}"></code></pre>`;
    });
  }
}
