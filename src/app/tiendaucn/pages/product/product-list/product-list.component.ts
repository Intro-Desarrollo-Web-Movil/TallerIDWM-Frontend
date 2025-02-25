import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NavbarButtonComponent } from '../../../components/navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../../../components/dropdown-button/dropdown-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductCardListComponent } from '../../../components/product-card-list/product-card-list.component';
import { SearchInputComponent } from '../../../components/search-input/search-input.component';
import { SearchBarComponent } from '../../../components/search-bar/search-bar.component';

/**
 * Componente para la lista de productos.
 *
 * Este componente muestra una lista de productos y utiliza varios componentes auxiliares
 * como la barra de navegación, la lista de tarjetas de productos y la barra de búsqueda.
 */
@Component({
  selector: 'product-list',
  imports: [CommonModule, HttpClientModule, ProductCardListComponent, NavbarComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
