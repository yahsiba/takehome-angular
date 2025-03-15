/**
 * CartService
 *
 * Purpose:
 *   Manages the shopping cart and alert messages.
 *
 * How It Works:
 *   - Maintains a reactive "cart" state using an Angular signal.
 *   - Provides methods to add and remove products from the cart.
 *   - Validates that a product is in stock and that the number of items does not exceed the product's stock.
 *   - Sets an alert message (also using a signal) when an action is not permitted (e.g., out of stock or maximum limit reached)
 *     and automatically clears the alert after 3 seconds.
 */
import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  alertMessage = signal<string | null>(null);

  addToCart(product: Product) {
    const currentCount = this.cart().filter(p => p.id === product.id).length;
    
    if (!product.stock || product.stock <= 0) {
      this.alertMessage.set("Item is out of stock!");
      this.clearAlertAfterDelay();
      return;
    }
    
    if (currentCount < product.stock) {
      this.cart.set([...this.cart(), product]);
      // Clear any existing alert (if needed)
      this.alertMessage.set(null);
    } else {
      this.alertMessage.set("Maximum item limit reached");
      this.clearAlertAfterDelay();
    }
  }

  removeFromCart(id: number) {
    const currentCart = this.cart();
    const index = currentCart.findIndex(p => p.id === id);
    if (index >= 0) {
      const newCart = [
        ...currentCart.slice(0, index),
        ...currentCart.slice(index + 1)
      ];
      this.cart.set(newCart);
      // Optionally clear any alerts after removal
      this.alertMessage.set(null);
    }
  }

  private clearAlertAfterDelay(): void {
    setTimeout(() => {
      this.alertMessage.set(null);
    }, 3000); // Clears the alert after 3 seconds
  }
}
