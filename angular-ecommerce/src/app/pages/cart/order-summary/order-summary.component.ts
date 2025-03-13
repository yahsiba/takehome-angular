import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [PrimaryButtonComponent, CommonModule],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-2xl mb-4">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg font-bold">Total</span>
          <span>{{ total() | currency:'USD':'symbol':'1.2-2' }}</span>
        </div>
        <app-primary-button label="Proceed to checkout" />
      </div>
    </div>
  `,
  styles: [``]
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let sum = 0;
    for (const item of this.cartService.cart()) {
      sum += item.price;
    }
    return sum;
  });
}
