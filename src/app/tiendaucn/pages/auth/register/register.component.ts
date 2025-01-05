import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { NavbarButtonComponent } from '../../../components/navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../../../components/dropdown-button/dropdown-button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../../../components/register-form/register-form.component';

@Component({
  selector: 'register',
  imports: [CommonModule, HttpClientModule, NavbarComponent, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
