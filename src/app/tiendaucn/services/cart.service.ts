import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPIGetCart } from '../interfaces/ResponseAPI_GetCart';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl: string = 'http://localhost:5132/api'; //5015

    // Inyectar modulo HttpClient
    private http = inject(HttpClient)

    public errors: string[] = [];



    // Método para Obtener todos los Productos
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

    getCart(cartId: number): Promise<any> {
      const url = `${this.baseUrl}/ShoppingCart/${cartId}`;
      return this.http.get<any>(url).toPromise();
    }

    //! TO DO

    // Método para Crear un Producto

    //! TO DO


    getErrors(): string[] {
      return this.errors;
    }
  }

