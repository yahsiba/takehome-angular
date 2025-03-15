/**
 * Routes
 *
 * Purpose:
 *   Defines the application routing configuration.
 *   The router uses these routes to determine which component to display.
 *
 * How It Works:
 *   - Redirects the root path to '/products'.
 *   - Specifies routes for the products list, product detail, and shopping cart.
 *
 */
import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/products-list/product-detail/product-detail.component';

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
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
