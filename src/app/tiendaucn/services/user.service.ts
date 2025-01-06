import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseAPIGetAllUsers } from '../interfaces/ResponseAPI_GetAllUsers';
import { User } from '../interfaces/User';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:5132/api';

  public errors: string[] = [];

  // Inyectar modulo HttpClient
  private http = inject(HttpClient)


  // Método para Obtener todos los Usuarios

  async getAllUsers(name: string = '', pageNumber: number = 1, pageSize: number = 10): Promise<ResponseAPIGetAllUsers> {
    try {
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAllUsers>(`${this.baseUrl}/User?name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`));
      return Promise.resolve(response);
    } catch (error) {
      console.log('Error en getAllUsers', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }

  getAllUsersFull(pageSize: number): Promise<any> {
    const url = `${this.baseUrl}/User?pageSize=${pageSize}`;
    console.log(url); // Para verificar la URL generada
    return this.http.get<any>(url).toPromise();
  }

  // Método para Crear un Usuario

  //! TO DO
}
