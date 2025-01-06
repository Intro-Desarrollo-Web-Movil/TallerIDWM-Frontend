import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NavbarButtonComponent } from '../../../components/navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../../../components/dropdown-button/dropdown-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartTableComponent } from "../../../components/cart-table/cart-table.component";

/**
 * Componente para el carrito de compras.
 *
 * Este componente muestra el carrito de compras del usuario y utiliza varios componentes auxiliares
 * como la barra de navegación y la tabla del carrito.
 */
@Component({
  selector: 'cart',
  imports: [CommonModule, CartTableComponent, HttpClientModule, NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

}
