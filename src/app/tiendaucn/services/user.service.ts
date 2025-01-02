import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  //! TO DO

  // Método para Crear un Usuario

  //! TO DO
}
