/**
 * ProductDetailComponent
 *
 * Purpose:
 *   Displays detailed information about a single product.
 *   This component is navigated to when Navigated to via the /products/:id route.
 *
 * How It Works:
 *   - Retrieves the product ID from the route parameters.
 *   - Uses ProductService to fetch the product data.
 *   - Displays the product's image, name, price, description, and stock status.
 *
 *   
 */
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
    <div class="detail-container">
      <div *ngIf="product; else notFound">
        <h2 class="detail-title">{{ product?.name }}</h2>
        <img 
          [src]="product?.image" 
          alt="{{ product?.name }}" 
          class="detail-image" 
        />
        <p class="detail-price">Price: {{ '$' + product?.price }}</p>
        <p class="detail-description">{{ product?.description }}</p>
        <p *ngIf="product?.stock !== undefined; else outOfStock">
          In Stock: {{ product?.stock }}
        </p>
        <ng-template #outOfStock>
          <p class="out-of-stock">Out of stock</p>
        </ng-template>
      </div>
      <ng-template #notFound>
        <p class="out-of-stock">Product not found.</p>
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
