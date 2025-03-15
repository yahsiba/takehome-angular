/**
 * OrderSummaryComponent
 *
 * Purpose:
 *   Displays an order summary with the total price of items in the cart.
 *
 * How It Works:
 *   - Uses CartService to access the cart.
 *   - Computes the total price using a computed property.
 *
 */
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent {
  private cartService = inject(CartService);

  total = computed(() => {
    return this.cartService.cart().reduce((acc, item) => acc + item.price, 0);
  });
}
