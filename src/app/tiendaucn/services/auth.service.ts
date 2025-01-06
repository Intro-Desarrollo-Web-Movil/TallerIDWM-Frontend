import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private userRole = new BehaviorSubject<string | null>(this.getRole());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get role() {
    return this.userRole.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('user');
  }

  private getRole(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  }

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.next(true);
    this.userRole.next(user.role);
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.userRole.next(null);
  }
}
