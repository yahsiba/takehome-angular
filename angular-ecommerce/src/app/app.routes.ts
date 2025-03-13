import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';

import { CartComponent } from './pages/cart/cart.component';


//need to define default route(home page), and one for cart 
export const routes: Routes = [{
    path:'', 
    pathMatch:'full', 
    component: ProductsListComponent
}, 
{//route for cart page 
    path:'cart',
    component: CartComponent,
    //to show on UI we go in app component 
}

];
