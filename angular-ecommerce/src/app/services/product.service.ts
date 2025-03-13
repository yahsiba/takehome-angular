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
    },
    {
      id: 3,
      name: 'Arsenal FC 05-06',
      description: 'Arsenal’s iconic retro jersey with gold lettering.',
      price: 130.99,
      image: 'https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,f=webp//pub/media/catalog/product//c/7/c7efc05d3c0f7c72351d7207651b96ee86a88535895956350cb107762fbf2432.jpeg',
      stock: 0
    },
    {
      id: 4,
      name: 'FC Barcelona 2024-25 Away Kit',
      description: 'Barcelona’s latest away jersey with refelctive logos.',
      price: 110.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbwwuhDoeBWyoI7OIGZwxh0mNnKhNgFtMUw&s',
      stock: 2
    }, 
    {
      id: 5,
      name: 'FC Barcelona 2024-25 Away Kit',
      description: 'Barcelona’s latest away jersey with refelctive logos.',
      price: 110.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbwwuhDoeBWyoI7OIGZwxh0mNnKhNgFtMUw&s',
      stock: 2
    }, 
    {
      id: 6,
      name: 'Real Madrid 2024-25 Third Kit',
      description: 'Barcelona’s latest away jersey with refelctive logos.',
      price: 110.99,
      image: 'https://xclusivejerseys.com/cdn/shop/files/Untitled_design_18_94d6727f-fe2b-4d7f-afa0-c21f31a6a9d1.png?v=1718723218',
      stock: 4
    }, 
  

  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}
