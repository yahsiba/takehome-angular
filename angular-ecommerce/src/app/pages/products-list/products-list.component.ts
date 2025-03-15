/**
 * ProductsListComponent
 *
 * Purpose:
 *   Displays a list of products by fetching data from the ProductService.
 *
 * How It Works:
 *   - On initialization, it subscribes to ProductService.getProducts() and stores the result in the "products" array.
 *   - Uses the *ngFor directive (with trackBy for performance) to render a ProductCardComponent for each product.
 *
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/products.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  //styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }
}
