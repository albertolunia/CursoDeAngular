import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
  <!-- <router-outlet></router-outlet> -->
  <app-new-component/>
  <h2>Components</h2>
  `,
})
export class AppComponent {}
