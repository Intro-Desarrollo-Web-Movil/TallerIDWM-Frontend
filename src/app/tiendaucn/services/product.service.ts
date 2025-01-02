import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private baseUrl: string = 'http://localhost:5015/api';

  public errors: string[] = [];

  // Inyectar modulo HttpClient
  private http = inject(HttpClient)


  // Método para Obtener todos los Productos

  //! TO DO

  // Método para Crear un Producto

  //! TO DO
}
