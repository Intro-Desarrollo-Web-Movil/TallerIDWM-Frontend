import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';
import { ResponseAPIGetAllProducts } from '../../interfaces/ResponseAPI_GetAllProducts';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterButtonComponent } from '../filter-button/filter-button.component';
@Component({
  selector: 'product-card-list',
  imports: [CommonModule, HttpClientModule, FilterButtonComponent, SearchBarComponent, ProductCardComponent, SearchInputComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.css'
})
export class ProductCardListComponent implements OnInit{
  public products: Product[] = [];

  totalItems: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;

  totalPages: number = 0;

  searchName: string = '';

  selectedCategory: number | null = null;
  sort: string | null = null;

  categoryOptions = [
    { text: 'Poleras', value: 1 },
    { text: 'Gorros', value: 2 },
    { text: 'Juguetería', value: 3 },
    { text: 'Alimentación', value: 4 },
    { text: 'Libros', value: 5 }
  ];

  sortOptions = [
    { text: 'Ascendente', value: 'asc' },
    { text: 'Descendente', value: 'desc' }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts(this.searchName, this.selectedCategory, this.sort, this.pageNumber, this.pageSize)
      .then((response: ResponseAPIGetAllProducts) => {
        console.log('Response from API:', response);
        this.products = response.products;

        this.totalItems = response.totalItems;
        this.pageNumber = response.pageNumber;
        this.pageSize = response.pageSize;

        console.log('Products:', this.products);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }

  onSearch(name: string): void {
    this.searchName = name;
    this.pageNumber = 1; // Reset to first page on new search
    this.getAllProducts();
  }

  onCategorySelected(category: number): void {
    this.selectedCategory = category;
    this.pageNumber = 1; // Reset to first page on new filter
    this.getAllProducts();
  }

  onSortSelected(sort: string): void {
    this.sort = sort;
    this.pageNumber = 1; // Reset to first page on new sort
    this.getAllProducts();
  }

  onPreviousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getAllProducts();
    }
  }

  onNextPage(): void {
    if (this.pageNumber * this.pageSize < this.totalItems) {
      this.pageNumber++;
      this.getAllProducts();
    }
  }
}
