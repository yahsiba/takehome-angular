import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div *ngIf="product; else notFound">
        <h2 class="text-2xl font-bold mb-4">{{ product?.name }}</h2>
        <img
          [src]="product?.image"
          alt="{{ product?.name }}"
          class="w-[200px] h-[200px] object-contain mb-4"
        />
        <p class="mb-2 font-semibold">Price: {{ '$' + product?.price }}</p>
        <p class="mb-2">{{ product?.description }}</p>
        <p *ngIf="product?.stock; else outOfStock">
          In Stock: {{ product?.stock }}
        </p>
        <ng-template #outOfStock>
          <p class="text-red-500 font-bold">Out of stock</p>
        </ng-template>
      </div>
      <ng-template #notFound>
        <p class="text-red-500 font-bold">Product not found.</p>
      </ng-template>
    </div>
  `,
  styles: [``]
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product: Product | undefined;

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }
}
