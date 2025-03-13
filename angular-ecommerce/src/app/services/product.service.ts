import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Inter Miami CF 2024',
      description: 'The official 2024 kit featuring vibrant pink colors.',
      price: 149.99,
      image: 'https://www.caneswear.com/cdn/shop/files/IU0189_1_APPAREL_Photography_FrontView_white.jpg?v=1707372881&width=1200',
      stock: 8
    },
    {
      id: 2,
      name: 'Bayern Munich 23/24',
      description: 'Bayern’s latest home jersey with red-and-white stripes.',
      price: 74.99,
      image: 'https://m.media-amazon.com/images/I/51ePL2UP8GL._AC_UF1000,1000_QL80_.jpg',
      stock: 5
    }
    // ... more products
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}
