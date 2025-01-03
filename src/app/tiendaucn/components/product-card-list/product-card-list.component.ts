import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'product-card-list',
  imports: [CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent {
  products = [
    { name: 'Producto 1', type: 'Tipo 1', price: 1000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 2', type: 'Tipo 2', price: 2000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 3', type: 'Tipo 3', price: 3000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 4', type: 'Tipo 4', price: 4000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 5', type: 'Tipo 5', price: 5000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 6', type: 'Tipo 6', price: 6000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 7', type: 'Tipo 7', price: 7000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 8', type: 'Tipo 8', price: 8000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 9', type: 'Tipo 9', price: 9000, imageUrl: 'projects/ucnlogo.png' },
    { name: 'Producto 10', type: 'Tipo 10', price: 10000, imageUrl: 'projects/ucnlogo.png' }
  ];
}
