import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio de autenticación para manejar el estado de autenticación del usuario.
 * Proporciona métodos para iniciar sesión, cerrar sesión y obtener el rol del usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * BehaviorSubject que mantiene el estado de si el usuario está logueado o no.
   */
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  /**
   * BehaviorSubject que mantiene el rol del usuario logueado.
   */
  private userRole = new BehaviorSubject<string | null>(this.getRole());

  /**
   * Observable que emite el estado de si el usuario está logueado o no.
   */
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  /**
   * Observable que emite el rol del usuario logueado.
   */
  get role() {
    return this.userRole.asObservable();
  }

  /**
   * Verifica si hay un token de usuario almacenado en el localStorage.
   * @returns {boolean} - `true` si hay un token, `false` en caso contrario.
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('user');
  }

  /**
   * Obtiene el rol del usuario desde el localStorage.
   * @returns {string | null} - El rol del usuario si existe, `null` en caso contrario.
   */
  private getRole(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  }

  /**
   * Inicia sesión del usuario almacenando su información en el localStorage y actualizando los BehaviorSubjects.
   * @param {any} user - Objeto que contiene la información del usuario.
   */
  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.next(true);
    this.userRole.next(user.role);
  }

  /**
   * Cierra sesión del usuario eliminando su información del localStorage y actualizando los BehaviorSubjects.
   */
  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.userRole.next(null);
  }
}
