import { Injectable, signal} from '@angular/core';
import { Product } from '../models/products.model'

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart = signal<Product[]>([
    {
      id: 1, 
      title: 'Inter Miami CF 2024',
      price: 149.99, 
      image: "https://www.caneswear.com/cdn/shop/files/IU0189_1_APPAREL_Photography_FrontView_white.jpg?v=1707372881&width=1200",
      stock: 8, 
    }, 
    {
      id: 2, 
      title: 'Bayern Munich 23/24',
      price: 74.99, 
      image: "https://m.media-amazon.com/images/I/51ePL2UP8GL._AC_UF1000,1000_QL80_.jpg",
      stock: 5, 
    },
  ]);

  addToCart(product: Product) {

    this.cart.set([...this.cart(), product]);

  }

  removeFromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
