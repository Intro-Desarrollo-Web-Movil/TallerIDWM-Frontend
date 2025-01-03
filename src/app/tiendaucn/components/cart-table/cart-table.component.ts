import { Component } from '@angular/core';

@Component({
  selector: 'cart-table',
  imports: [],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent {
  cantidad1: number = 1;
  cantidad2: number = 1;
  cantidad3: number = 1;

  incrementarCantidad(producto: number) {
    if (producto === 1) {
      this.cantidad1++;
    } else if (producto === 2) {
      this.cantidad2++;
    } else if (producto === 3) {
      this.cantidad3++;
    }
  }
  decrementarCantidad(producto: number) {
    if (producto === 1 && this.cantidad1 > 0) {
      this.cantidad1--;
    } else if (producto === 2 && this.cantidad2 > 0) {
      this.cantidad2--;
    } else if (producto === 3 && this.cantidad3 > 0) {
      this.cantidad3--;
    }
  }
}
