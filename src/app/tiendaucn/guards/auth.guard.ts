import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Guard para proteger las rutas según el rol del usuario.
 *
 * Este guard verifica si el usuario tiene el rol adecuado para acceder a una ruta específica.
 * Si el usuario no tiene el rol adecuado, es redirigido a la página de inicio de sesión.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * Constructor del guard.
   * @param {AuthService} authService - Servicio de autenticación para obtener el rol del usuario.
   * @param {Router} router - Servicio de enrutamiento de Angular.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Método para verificar si se puede activar una ruta.
   * @param {ActivatedRouteSnapshot} route - Información sobre la ruta activada.
   * @param {RouterStateSnapshot} state - Estado del router en el momento de la activación.
   * @returns {Observable<boolean>} - Observable que emite `true` si el usuario tiene el rol adecuado, `false` en caso contrario.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.role.pipe(
      map(role => {
        const expectedRole = route.data['role'];
        if (role === expectedRole) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
