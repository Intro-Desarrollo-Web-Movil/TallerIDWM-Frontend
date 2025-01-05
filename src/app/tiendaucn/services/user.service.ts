import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseAPIGetAllUsers } from '../interfaces/ResponseAPI_GetAllUsers';
import { User } from '../interfaces/User';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:5015/api';

  public errors: string[] = [];

  // Inyectar modulo HttpClient
  private http = inject(HttpClient)


  // Método para Obtener todos los Usuarios

  async getAllProducts(name: string = '', pageNumber: number = 1, pageSize: number = 10): Promise<ResponseAPIGetAllUsers> {
      try {
        const response = await firstValueFrom(this.http.get<ResponseAPIGetAllUsers>(`${this.baseUrl}/Product?name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`));
        return Promise.resolve(response);
      } catch (error) {
        console.log('Error en getAllProducts', error);
        let e = error as HttpErrorResponse;
        this.errors.push(e.message);
        return Promise.reject(error);
      }
    }

  // Método para Crear un Usuario

  //! TO DO
}
