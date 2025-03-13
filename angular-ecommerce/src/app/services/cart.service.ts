import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([
  ]);

  outOfStockMessage = signal<string | null>(null);

  addToCart(product: Product) {
    // Optional check in case the user tries to add an out-of-stock item
    const currentCount = this.cart().filter(p => p.id === product.id).length;

    if (!product.stock || product.stock <= 0) {
      // If no stock is available, show out-of-stock message
      this.outOfStockMessage.set("Item is out of stock!");
    } else if (currentCount < product.stock) {
      // Allowed to add if current count is less than available stock
      this.cart.set([...this.cart(), product]);
      // Clear any error message if addition is successful
      this.outOfStockMessage.set(null);
    } else {
      // If current count reaches or exceeds available stock, show limit reached message
      this.outOfStockMessage.set("Maximum item limit reached");
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
    }
  }
  

  constructor() {}
}
