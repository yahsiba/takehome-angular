/**
 * AppComponent
 *
 * Purpose:
 *   Serves as the root component of the application.
 *   This is the main shell of the application and is bootstrapped in the main module.
 *
 * How It Works:
 *   - Displays the header and a global alert banner.
 *   - Contains a RouterOutlet where the routed components are displayed.
 *   - Injects the CartService to pass the global alert message to the AlertComponent.
 *
 */
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AlertComponent],
  template: `
    <app-header></app-header>
    <app-alert [message]="cartService.alertMessage()"></app-alert>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  cartService = inject(CartService);
}

