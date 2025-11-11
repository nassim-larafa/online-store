import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  signin() {
    this.isLoggedIn = true;
    alert('You are signed in!');
  }

  signout() {
    this.isLoggedIn = false;
    alert('You are signed out!');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
