import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';
import { ResponseAPIGetAllProducts } from '../../interfaces/ResponseAPI_GetAllProducts';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchInputComponent } from '../search-input/search-input.component';
@Component({
  selector: 'product-card-list',
  imports: [CommonModule, HttpClientModule, ProductCardComponent, NavbarComponent, SearchInputComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent implements OnInit{
  products: Product[] = [];
  totalItems: number = 0;
  pageNumber: number = 1;
  pageSize: number = 10;
  searchName: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts(this.searchName, this.pageNumber, this.pageSize)
      .then((response: ResponseAPIGetAllProducts) => {
        this.products = response.products;
        this.totalItems = response.totalItems;
        this.pageNumber = response.pageNumber;
        this.pageSize = response.pageSize;
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }

  onSearch(name: string): void {
    this.searchName = name;
    this.getAllProducts();
  }
}
