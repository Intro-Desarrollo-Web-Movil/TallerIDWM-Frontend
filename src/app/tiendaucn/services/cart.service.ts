import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPIGetCart } from '../interfaces/ResponseAPI_GetCart';
import { firstValueFrom } from 'rxjs';

/**
 * Servicio para manejar las operaciones relacionadas con el carrito de compras.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
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
   * Método para obtener todos los productos en el carrito.
   * @param {number} cartId - ID del carrito.
   * @returns {Promise<ResponseAPIGetCart>} - Promesa que resuelve con la respuesta de la API.
   */
  async getAllProducts(cartId: number): Promise<ResponseAPIGetCart> {
    try {
      const response = await firstValueFrom(this.http.get<ResponseAPIGetCart>(`${this.baseUrl}/ShoppingCart/${cartId}`));
      return Promise.resolve(response);
    } catch (error) {
      console.log('Error en getCart', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }

  /**
   * Método para obtener el carrito de compras por ID.
   * @param {number} cartId - ID del carrito.
   * @returns {Promise<any>} - Promesa que resuelve con la respuesta de la API.
   */
  getCart(cartId: number): Promise<any> {
    const url = `${this.baseUrl}/ShoppingCart/${cartId}`;
    return this.http.get<any>(url).toPromise();
  }

  /**
   * Método para eliminar un producto del carrito.
   * @param {number} cartId - ID del carrito.
   * @param {number} productId - ID del producto.
   * @returns {Promise<any>} - Promesa que resuelve con la respuesta de la API.
   */
  deleteProduct(cartId: number, productId: number): Promise<any> {
    const url = `${this.baseUrl}/ShoppingCart/${cartId}/remove/${productId}`;
    return this.http.delete(url, { responseType: 'text' }).toPromise();
  }

  /**
   * Método para agregar un producto al carrito.
   * @param {number} cartId - ID del carrito.
   * @param {number} productId - ID del producto.
   * @param {number} quantity - Cantidad del producto.
   * @returns {Promise<any>} - Promesa que resuelve con la respuesta de la API.
   */
  addProduct(cartId: number, productId: number, quantity: number): Promise<any> {
    const url = `${this.baseUrl}/ShoppingCart/${cartId}/add`;
    const body = { productId, quantity };
    return this.http.post<any>(url, body).toPromise();
  }

  /**
   * Método para obtener los mensajes de error.
   * @returns {string[]} - Array de mensajes de error.
   */
  getErrors(): string[] {
    return this.errors;
  }
}
