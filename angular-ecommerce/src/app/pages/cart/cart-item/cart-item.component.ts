import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  cartService = inject(CartService);
  item = input.required<Product>();
}
