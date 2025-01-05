import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces/Product';
import { ResponseAPIGetAllProducts } from '../interfaces/ResponseAPI_GetAllProducts';


@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private baseUrl: string = 'http://localhost:5132/api'; //5015

  // Inyectar modulo HttpClient
  private http = inject(HttpClient)

  public errors: string[] = [];



  // Método para Obtener todos los Productos
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


  getErrors(): string[] {
    return this.errors;
  }
}
