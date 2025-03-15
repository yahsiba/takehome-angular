/**
 * CartComponent
 *
 * Purpose:
 *   Displays the entire shopping cart including cart items and order summary.
 *
 * How It Works:
 *   - Retrieves the current cart from CartService.
 *   - Uses Angular's new @for syntax (or *ngFor) to iterate over cart items.
 *
 */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartService = inject(CartService);
}
