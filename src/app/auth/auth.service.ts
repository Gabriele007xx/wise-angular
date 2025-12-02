import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = inject(JwtHelperService);
  
  private accessToken = signal<string | null>(null);

  isLoggedIn = computed(() => {
    const token = this.accessToken();
    return !!(token && !this.jwtHelper.isTokenExpired(token));
  });

  userId = computed(() => {
    const token = this.accessToken();
      const decoded = this.jwtHelper.decodeToken(this.accessToken() || '');
      console.log("Decoded token:", decoded);
      return decoded.id 
    
  });

  constructor() {
      const token = localStorage.getItem('accessToken');
      this.accessToken.set(token);
    
  }

  setAccessToken(token: string | null): void {
    this.accessToken.set(token);
      if (token) {
        localStorage.setItem('accessToken', token);
      } else {
        localStorage.removeItem('accessToken');
      }
    
  }

  getAccessToken() : string | null
  {
      return this.accessToken();
  }
}