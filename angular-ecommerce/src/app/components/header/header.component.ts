/**
 * HeaderComponent
 *
 * Purpose:
 *   Displays the application header with the site title and a primary button for the cart.
 *
 * How It Works:
 *   - Uses dependency injection to get the CartService.
 *   - Displays the current cart item count in the cart button.
 *
 */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, PrimaryButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  cartService = inject(CartService);
}
