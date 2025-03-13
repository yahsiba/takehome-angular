// cart.service.ts
import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    const currentCount = this.cart().filter(p => p.id === product.id).length;
    
    if (!product.stock || product.stock <= 0) {
      alert("Item is out of stock!");
      return;
    }
    
    if (currentCount < product.stock) {
      this.cart.set([...this.cart(), product]);
    } else {
      alert("Maximum item limit reached");
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
}
