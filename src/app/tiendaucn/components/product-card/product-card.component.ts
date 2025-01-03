import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: { name: string, type: string, price: number, imageUrl: string };

  addToCart(product: any) {
    // Lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito:', product);
  }
}
