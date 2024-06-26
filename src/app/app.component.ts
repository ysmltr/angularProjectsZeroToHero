import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],  // Burada AppHomeComponent'i import edin
  template: `
    <p>Merhaba</p>
    <hr>
    <div style="color: #691FB7;">
      <app-home></app-home>
    </div>
  `,
})
export class AppComponent {
  title = 'yesim ilter';
}
