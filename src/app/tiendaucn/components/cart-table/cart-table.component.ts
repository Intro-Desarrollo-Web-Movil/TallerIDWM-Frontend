import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cart-table',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent implements OnInit {
  items: any[] = [];
  total: number = 0;

  constructor(private router: Router, private cartService: CartService, private userService: UserService) {}

  ngOnInit() {
    this.loadCart();
  }

  async loadCart() {
    const userId = this.userService.getUserId();
    if (userId !== null) {
      let cartFound = false;
      let cartId = 1;
      while (!cartFound) {
        try {
          const cart = await this.cartService.getCart(cartId);
          if (cart.userId === userId) {
            this.items = cart.items;
            this.total = cart.total;
            cartFound = true;
          }
          cartId++;
        } catch (error) {
          console.error('Error fetching cart:', error);
          break;
        }
      }
    }
  }

  incrementarCantidad(productId: number) {
    const item = this.items.find(i => i.productId === productId);
    if (item) {
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      this.calcularTotal();
    }
  }

  decrementarCantidad(productId: number) {
    const item = this.items.find(i => i.productId === productId);
    if (item && item.quantity > 0) {
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      this.calcularTotal();
    }
  }

  eliminarCantidad(productId: number) {
    const item = this.items.find(i => i.productId === productId);
    if (item) {
      item.quantity = 0;
      item.totalPrice = 0;
      this.calcularTotal();
    }
  }

  calcularTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  navigateToDeliveryForm() {
    this.router.navigate(['/delivery-form']);
  }
}
