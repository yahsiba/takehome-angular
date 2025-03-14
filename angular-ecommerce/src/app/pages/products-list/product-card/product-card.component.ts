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
  //styleUrls: ['./product-card.component.css']
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
