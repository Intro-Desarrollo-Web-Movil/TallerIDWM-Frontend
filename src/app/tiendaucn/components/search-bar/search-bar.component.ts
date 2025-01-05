import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() pageNumber: number = 1;
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
  @Output() previousPage = new EventEmitter<void>();
  @Output() nextPage = new EventEmitter<void>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  onPreviousPage(): void {
    this.previousPage.emit();
  }

  onNextPage(): void {
    this.nextPage.emit();
  }
}
