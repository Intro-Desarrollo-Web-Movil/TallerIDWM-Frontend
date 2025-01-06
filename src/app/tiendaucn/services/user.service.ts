import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ResponseAPIGetAllUsers } from '../interfaces/ResponseAPI_GetAllUsers';
import { User } from '../interfaces/User';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

/**
 * Servicio para manejar las operaciones relacionadas con los usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * URL base de la API.
   */
  private baseUrl: string = 'http://localhost:5132/api';

  /**
   * ID del usuario logueado.
   */
  private userId: number | null = null;

  /**
   * Array para almacenar los mensajes de error.
   */
  public errors: string[] = [];

  /**
   * Inyectar modulo HttpClient.
   */
  private http = inject(HttpClient);

  /**
   * Método para obtener todos los usuarios.
   * @param {string} name - Nombre del usuario para filtrar.
   * @param {number} pageNumber - Número de página.
   * @param {number} pageSize - Tamaño de la página.
   * @returns {Promise<ResponseAPIGetAllUsers>} - Promesa que resuelve con la respuesta de la API.
   */
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

  /**
   * Método para obtener todos los usuarios sin paginación.
   * @param {number} pageSize - Tamaño de la página.
   * @returns {Promise<any>} - Promesa que resuelve con la respuesta de la API.
   */
  getAllUsersFull(pageSize: number): Promise<any> {
    const url = `${this.baseUrl}/User?pageSize=${pageSize}`;
    console.log(url); // Para verificar la URL generada
    return this.http.get<any>(url).toPromise();
  }

  /**
   * Método para establecer el ID del usuario logueado.
   * @param {number} id - ID del usuario.
   */
  setUserId(id: number) {
    this.userId = id;
  }

  /**
   * Método para obtener el ID del usuario logueado.
   * @returns {number | null} - ID del usuario si existe, `null` en caso contrario.
   */
  getUserId(): number | null {
    return this.userId;
  }

  // Método para Crear un Usuario

  //! TO DO
}
