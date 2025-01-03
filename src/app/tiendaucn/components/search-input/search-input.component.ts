import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch(event: Event): void {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    this.search.emit(this.searchTerm);
  }
}
