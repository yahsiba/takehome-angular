import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      <app-product-card
        *ngFor="let product of products; trackBy: trackById"
        [product]="product"
      ></app-product-card>
    </div>
  `,
  styles: [``]
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  trackById(index: number, product: Product) {
    return product.id;
  }
}
