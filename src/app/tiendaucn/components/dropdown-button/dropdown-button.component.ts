import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dropdown-button',
  imports: [CommonModule],
  templateUrl: './dropdown-button.component.html',
  styleUrl: './dropdown-button.component.css'
})
export class DropdownButtonComponent {
  @Input() label: string = '';
  @Input() options: { label: string, route: string }[] = [];
  dropdownVisible: boolean = false;

  constructor(private router: Router) {}

  navigateToPage(route: string) {
    this.router.navigate([route]);
    this.dropdownVisible = false; // Ocultar el menú después de la navegación
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
