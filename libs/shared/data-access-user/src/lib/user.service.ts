import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const LOCAL_STORAGE_USER = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  constructor() {
    const user = localStorage.getItem(LOCAL_STORAGE_USER);
    if (user) {
      this.isUserLoggedIn.next(true);
    }
  }

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      localStorage.setItem(LOCAL_STORAGE_USER, username);
      this.isUserLoggedIn.next(true);
    }
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}
