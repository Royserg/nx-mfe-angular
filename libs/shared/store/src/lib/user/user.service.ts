import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_USER } from './constants';
import { UserStore } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private userStore: UserStore, private router: Router) {}

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      localStorage.setItem(LOCAL_STORAGE_USER, username);
      this.userStore.update({ name: username, isLoggedIn: true });
      this.router.navigateByUrl('/');
    }
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_USER);
    this.userStore.update({ name: '', isLoggedIn: false });
    this.router.navigateByUrl('/login');
  }

  updateUserName(newName: string) {
    this.userStore.update((state) => ({ name: newName }));
  }

  resetStore(): void {
    this.userStore.reset();
  }
}
