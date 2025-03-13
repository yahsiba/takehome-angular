import { Component , signal} from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `

  <div class = "p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id){
      <app-product-card [product]="product" />

    }
  </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  //we want to use signals as for dynamic data signals is now the best practice 
  products = signal<Product[]>(
    [
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
    ]
  )

}
