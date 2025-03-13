import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AlertComponent],
  template: `
    <app-header></app-header>
    <app-alert [message]="cartService.outOfStockMessage()"></app-alert>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  cartService = inject(CartService);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      // Clear the alert when navigation starts
      this.cartService.outOfStockMessage.set(null);
    });
  }
}
