/**
 * ProductCardComponent
 *
 * Purpose:
 *   Displays a product in a card format with its image, name, price, and description.
 *   Rendered in the ProductsListComponent for each product.
 *
 * How It Works:
 *   - Accepts a Product object via an input property "product".
 *   - Provides buttons to add the product to the cart or view its details.
 *   - Uses CartService and Router (via dependency injection) for these actions.
 *
 */
import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();
  private cartService = inject(CartService);
  private router = inject(Router);

  addToCart(): void {
    this.cartService.addToCart(this.product());
  }

  viewDetails(): void {
    this.router.navigate(['/products', this.product().id]);
  }
}

