import { Component, OnInit } from '@angular/core';
import { NavbarButtonComponent } from '../navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { NavigationEnd, Router } from '@angular/router';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'navbar',
  imports: [CommonModule, FormsModule, HttpClientModule, ProductCardListComponent, SearchInputComponent ,LogoComponent, NavbarButtonComponent, DropdownButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isProductListPage: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events to check the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isProductListPage = event.urlAfterRedirects.includes('/product-list');
      }
    });
  }

  ngOnInit(): void {}

  onSearch(name: string): void {
    // Emitir el evento de búsqueda
    const productCardListComponent = document.querySelector('product-card-list');
    if (productCardListComponent) {
      productCardListComponent.dispatchEvent(new CustomEvent('search', { detail: name }));
    }
  }
}
