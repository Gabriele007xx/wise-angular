import { computed, Inject, Injectable, signal } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

// Service to manage authentication state
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly jwtHelper = Inject(JwtHelperService);
  acessToken = signal<String | null>(null);

  isLoggedIn = computed(() => {
    const token = this.acessToken();
    return token != null && !this.jwtHelper.isTokenExpired(token.toString());
  });

  userId = computed(() => {
    const token = this.acessToken();
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(this.acessToken()!.toString());
      return decodedToken.id
    }
  });

  constructor() {
    if (this.isBrowser()) {
      const token = localStorage.getItem('accesToken');
      if (token) {
        this.acessToken.set(token);
      }
    }
  }

  setAccessToken(token: String | null) {
    this.acessToken.set(token);
    if (this.isBrowser()) {
      if (token) {
        localStorage.setItem('accesToken', token.toString());
      } else {
        localStorage.removeItem('accesToken');
      }
    }
  }

  // Utility method to check if the code is running in the browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}

