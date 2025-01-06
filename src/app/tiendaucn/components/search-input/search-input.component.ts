import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Componente de entrada de búsqueda.
 *
 * Este componente proporciona una entrada de búsqueda y emite un evento cuando se realiza una búsqueda.
 */
@Component({
  selector: 'search-input',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  /**
   * Evento que se emite cuando se realiza una búsqueda.
   */
  @Output() search = new EventEmitter<string>();

  /**
   * Término de búsqueda ingresado por el usuario.
   */
  searchTerm: string = '';

  /**
   * Método que se llama cuando se realiza una búsqueda.
   * @param {Event} event - Evento del formulario.
   */
  onSearch(event: Event): void {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    this.search.emit(this.searchTerm);
  }
}
