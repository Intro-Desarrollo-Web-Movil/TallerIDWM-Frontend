
import { Component, Input, OnInit } from '@angular/core';
import { NavbarButtonComponent } from '../navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { NavigationEnd, Router } from '@angular/router';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  imports: [CommonModule, FormsModule, HttpClientModule, SearchInputComponent ,LogoComponent, NavbarButtonComponent, DropdownButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input() buttons: { text: string, route: string }[] = [];
  @Input() dropdownOptions: { text: string, route: string }[] = [];
  isDropdownVisible: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isDropdownVisible = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/product-list']);
  }
}
