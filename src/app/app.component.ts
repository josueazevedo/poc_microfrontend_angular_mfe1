import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MFE_CONFIG } from './config/mfe.config';
import { NavigateService } from './core/services/navigate/navigate.service';
import { getCurrentPath } from './core/helpers/mfe-path/mfe-path.helper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnChanges {
  @Input() path: string = '';
  public outlet = MFE_CONFIG.name;

  constructor(private navigateService: NavigateService) {
    this.startNavigate();
  }

  ngOnChanges(_: SimpleChanges): void {
    this.startNavigate();
  }

  private startNavigate(): void {
    this.navigateService.navigateReplace(getCurrentPath(this.path));
    this.path = '';
  }

  nav() {
    this.navigateService.navigate('home');
  }
}
