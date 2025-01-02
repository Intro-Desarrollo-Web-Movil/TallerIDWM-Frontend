import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NavbarButtonComponent } from '../../../components/navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../../../components/dropdown-button/dropdown-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cart',
  imports: [CommonModule, HttpClientModule, NavbarComponent,NavbarButtonComponent,DropdownButtonComponent],
    templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
