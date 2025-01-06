import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/Product';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'product-card',
  imports: [CommonModule, HttpClientModule, FormsModule],

  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product: any;

  constructor(private cartService: CartService, private userService: UserService) {}

  async addToCart() {
    const userId = this.userService.getUserId();
    if (userId !== null) {
      let cartFound = false;
      let cartId = 1;
      while (!cartFound) {
        try {
          const cart = await this.cartService.getCart(cartId);
          if (cart.userId === userId) {
            await this.cartService.addProduct(cart.cartId, this.product.productId, 1);
            cartFound = true;
            alert('Producto agregado al carrito');
          }
          cartId++;
        } catch (error) {
          console.error('Error fetching cart:', error);
          break;
        }
      }
    }
  }
}
