import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MFE_CONFIG } from './config/mfe.config';
import { ROUTES_LIST } from './config/router.config';
import { NavigateService } from './core/services/navigate/navigate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnChanges {
  title = 'mfe-flow-one';

  @Input() path: string = '';
  public outlet = MFE_CONFIG.name;

  constructor(private navigateService: NavigateService) {}

  ngOnChanges(_: SimpleChanges): void {
    this.startNavigate();
  }

  private startNavigate(): void {
    this.navigateService.navigateReplace(this.getCurrentPath());
    this.path = '';
  }

  private getCurrentPath(): string {
    const path =
      this.path.replace(`/${MFE_CONFIG.name}`, '').replace('/', '') ||
      ROUTES_LIST.HOME;
    return path;
  }
}
