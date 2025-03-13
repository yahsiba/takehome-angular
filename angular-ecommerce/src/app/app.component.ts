import { Component } from '@angular/core';
import { ROUTER_OUTLET_DATA, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { list } from 'postcss';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: ` 
    <app-header /> 


    <router-outlet/>
  `,
  styles: ` `,
})

//top level everything will be contrained within
export class AppComponent {
  title = 'angular-ecommerce';
}
