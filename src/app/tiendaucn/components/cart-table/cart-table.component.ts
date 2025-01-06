import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cart-table',
  imports: [CommonModule],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent {
  cantidad1 = 1;
  cantidad2 = 2;
  cantidad3 = 3;
  precio1 = 10000;
  precio2 = 20000;
  precio3 = 30000;
  total = 0;

  constructor(private router: Router) {
    this.calcularTotal();
  }

  incrementarCantidad(productId: number) {
    if (productId === 1) this.cantidad1++;
    if (productId === 2) this.cantidad2++;
    if (productId === 3) this.cantidad3++;
    this.calcularTotal();
  }

  decrementarCantidad(productId: number) {
    if (productId === 1 && this.cantidad1 > 0) this.cantidad1--;
    if (productId === 2 && this.cantidad2 > 0) this.cantidad2--;
    if (productId === 3 && this.cantidad3 > 0) this.cantidad3--;
    this.calcularTotal();
  }

  eliminarCantidad(productId: number) {
    if (productId === 1) this.cantidad1 = 0;
    if (productId === 2) this.cantidad2 = 0;
    if (productId === 3) this.cantidad3 = 0;
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = (this.cantidad1 * this.precio1) + (this.cantidad2 * this.precio2) + (this.cantidad3 * this.precio3);
  }

  navigateToDeliveryForm() {
    this.router.navigate(['/delivery-form']);
  }
}
