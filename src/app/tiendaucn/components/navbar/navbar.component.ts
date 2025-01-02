import { Component } from '@angular/core';
import { NavbarButtonComponent } from '../navbar-button/navbar-button.component';
import { DropdownButtonComponent } from '../dropdown-button/dropdown-button.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'navbar',
  imports: [CommonModule, LogoComponent, NavbarButtonComponent, DropdownButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


}
