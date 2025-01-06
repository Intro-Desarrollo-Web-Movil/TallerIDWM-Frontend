import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * Componente para la tabla del carrito de compras.
 *
 * Este componente muestra los productos en el carrito de compras del usuario y permite modificar las cantidades o eliminar productos.
 */
@Component({
  selector: 'cart-table',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent implements OnInit {
  /**
   * Array de productos en el carrito.
   */
  items: any[] = [];

  /**
   * Total del carrito.
   */
  total: number = 0;

  /**
   * ID del carrito.
   */
  cartId: number | null = null;

  /**
   * Constructor del componente.
   * @param {Router} router - Servicio de enrutamiento de Angular.
   * @param {CartService} cartService - Servicio para manejar las operaciones relacionadas con el carrito de compras.
   * @param {UserService} userService - Servicio para manejar las operaciones relacionadas con los usuarios.
   */
  constructor(private router: Router, private cartService: CartService, private userService: UserService) {}

  /**
   * Método de inicialización del componente.
   */
  ngOnInit() {
    this.loadCart();
  }

  /**
   * Método para cargar el carrito de compras del usuario logueado.
   */
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
            this.cartId = cart.cartId;
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

  /**
   * Método para eliminar un producto del carrito.
   * @param {number} productId - ID del producto a eliminar.
   */
  async eliminarCantidad(productId: number) {
    if (this.cartId !== null) {
      try {
        await this.cartService.deleteProduct(this.cartId, productId);
        this.items = this.items.filter(item => item.productId !== productId);
        this.calcularTotal();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  }

  /**
   * Método para incrementar la cantidad de un producto en el carrito.
   * @param {number} productId - ID del producto a incrementar.
   */
  incrementarCantidad(productId: number) {
    const item = this.items.find(i => i.productId === productId);
    if (item) {
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      this.calcularTotal();
    }
  }

  /**
   * Método para decrementar la cantidad de un producto en el carrito.
   * @param {number} productId - ID del producto a decrementar.
   */
  decrementarCantidad(productId: number) {
    const item = this.items.find(i => i.productId === productId);
    if (item && item.quantity > 0) {
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      this.calcularTotal();
    }
  }

  /**
   * Método para calcular el total del carrito.
   */
  calcularTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  /**
   * Método para navegar al formulario de entrega.
   */
  navigateToDeliveryForm() {
    this.router.navigate(['/delivery-form']);
  }
}
