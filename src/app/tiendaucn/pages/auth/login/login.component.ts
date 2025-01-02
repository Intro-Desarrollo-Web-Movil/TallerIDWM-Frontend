import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NavbarButtonComponent } from '../../../components/navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../../../components/dropdown-button/dropdown-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  imports: [CommonModule, HttpClientModule, NavbarComponent,NavbarButtonComponent,DropdownButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
