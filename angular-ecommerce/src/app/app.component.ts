import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  cartService = inject(CartService);
}
