import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces/Product';
import { ResponseAPIGetAllProducts } from '../interfaces/ResponseAPI_GetAllProducts';

/**
 * Servicio para manejar las operaciones relacionadas con los productos.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * URL base de la API.
   */
  private baseUrl: string = 'http://localhost:5132/api'; //5015

  /**
   * Inyectar modulo HttpClient.
   */
  private http = inject(HttpClient);

  /**
   * Array para almacenar los mensajes de error.
   */
  public errors: string[] = [];

  /**
   * Método para obtener todos los productos.
   * @param {string} name - Nombre del producto para filtrar.
   * @param {number | null} category - ID de la categoría para filtrar.
   * @param {string | null} sort - Parámetro de ordenación.
   * @param {number} pageNumber - Número de página.
   * @param {number} pageSize - Tamaño de la página.
   * @returns {Promise<ResponseAPIGetAllProducts>} - Promesa que resuelve con la respuesta de la API.
   */
  async getAllProducts(name: string = '', category: number | null = null, sort: string | null = null, pageNumber: number = 1, pageSize: number = 10): Promise<ResponseAPIGetAllProducts> {
    try {
      const categoryParam = category !== null ? `&category=${category}` : '';
      const sortParam = sort !== null ? `&sort=${sort}` : '';
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAllProducts>(`${this.baseUrl}/Product?name=${name}${categoryParam}${sortParam}&pageNumber=${pageNumber}&pageSize=${pageSize}`));
      return Promise.resolve(response);
    } catch (error) {
      console.log('Error en getAllProducts', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }

  //! TO DO

  // Método para Crear un Producto

  //! TO DO

  /**
   * Método para obtener los mensajes de error.
   * @returns {string[]} - Array de mensajes de error.
   */
  getErrors(): string[] {
    return this.errors;
  }
}
