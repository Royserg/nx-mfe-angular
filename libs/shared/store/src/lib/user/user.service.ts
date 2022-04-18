import { Injectable } from '@angular/core';
import { UserStore } from './user.store';

@Injectable({
  providedIn: 'root',
})
export class ProjectClientService {
  constructor(private userStore: UserStore) {}

  updateUserName(newName: string) {
    this.userStore.update((state) => ({ name: newName }));
  }

  resetStore(): void {
    this.userStore.reset();
  }
}
