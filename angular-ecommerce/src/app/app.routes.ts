import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailComponent } from './pages/products-list/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./pages/products-list/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent
      )
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
