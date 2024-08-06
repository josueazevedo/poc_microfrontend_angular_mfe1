import { Component } from '@angular/core';
import { NavigateService } from '../../../core/services/navigate/navigate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private navig: NavigateService) {}

  nav() {
    this.navig.navigate('chat-ai');
  }
}
