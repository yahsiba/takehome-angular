import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex-col gap-6 relative">
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().name }}</span>
          <span class="text-sm">{{ '$' + product().price }}</span>
          <!-- Optional: Display description here -->
          <span class="text-xs text-gray-500 mt-1">{{ product().description }}</span>

          <app-primary-button
            label="Add to Cart"
            class="mt-3"
            (btnClicked)="cartService.addToCart(product())"
          ></app-primary-button>

          <!-- View Details Button -->
          <app-primary-button
            label="View Details"
            class="mt-3"
            (btnClicked)="goToDetail(product().id)"
          ></app-primary-button>
        </div>

        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [ngClass]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          {{ product().stock ? (product().stock + ' left') : 'Out of stock' }}
        </span>
      </div>
    </div>
  `,
  styles: [``]
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();

  private router = inject(Router);

  goToDetail(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
