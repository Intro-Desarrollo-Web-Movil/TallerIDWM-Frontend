import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-button',
  imports: [CommonModule],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.css'
})
export class FilterButtonComponent {
  @Input() buttonText: string = 'Dropdown button';
  @Input() options: { text: string, value: any }[] = [];
  @Output() optionSelected = new EventEmitter<any>();

  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  onOptionClick(option: any): void {
    this.optionSelected.emit(option);
    this.isDropdownVisible = false; // Ocultar el menú después de seleccionar una opción
  }


}
